from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
NOTIFICATION_EMAIL = os.environ.get('NOTIFICATION_EMAIL', '')

# Create the main app
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class DemoRequestCreate(BaseModel):
    name: str
    company: str
    email: EmailStr
    role: str
    industry: str
    message: Optional[str] = ""

class DemoRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    company: str
    email: EmailStr
    role: str
    industry: str
    message: Optional[str] = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "pending"

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = ""
    subject: str
    message: str

class Contact(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    company: Optional[str] = ""
    subject: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Email sending helper
async def send_notification_email(subject: str, html_content: str):
    if not resend.api_key or not NOTIFICATION_EMAIL:
        logger.warning("Email not configured, skipping notification")
        return None
    
    try:
        params = {
            "from": SENDER_EMAIL,
            "to": [NOTIFICATION_EMAIL],
            "subject": subject,
            "html": html_content
        }
        email = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Email sent successfully: {email.get('id')}")
        return email
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return None

# Routes
@api_router.get("/")
async def root():
    return {"message": "AcmeSecure API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

@api_router.post("/demo-request", response_model=DemoRequest)
async def create_demo_request(input: DemoRequestCreate):
    demo_obj = DemoRequest(**input.model_dump())
    doc = demo_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.demo_requests.insert_one(doc)
    
    # Send email notification
    html_content = f"""
    <html>
    <body style="font-family: Arial, sans-serif; padding: 20px; background: #f8fafc;">
        <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px;">
            <h2 style="color: #0f172a; margin-bottom: 20px;">New Demo Request</h2>
            <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Name:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">{demo_obj.name}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Company:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">{demo_obj.company}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Email:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">{demo_obj.email}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Role:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">{demo_obj.role}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Industry:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">{demo_obj.industry}</td></tr>
                <tr><td style="padding: 10px 0;"><strong>Message:</strong></td><td style="padding: 10px 0;">{demo_obj.message or 'N/A'}</td></tr>
            </table>
        </div>
    </body>
    </html>
    """
    
    await send_notification_email(
        f"New Demo Request from {demo_obj.name} at {demo_obj.company}",
        html_content
    )
    
    return demo_obj

@api_router.get("/demo-requests", response_model=List[DemoRequest])
async def get_demo_requests():
    requests = await db.demo_requests.find({}, {"_id": 0}).to_list(1000)
    for req in requests:
        if isinstance(req.get('created_at'), str):
            req['created_at'] = datetime.fromisoformat(req['created_at'])
    return requests

@api_router.post("/contact", response_model=Contact)
async def create_contact(input: ContactCreate):
    contact_obj = Contact(**input.model_dump())
    doc = contact_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.contacts.insert_one(doc)
    
    # Send email notification
    html_content = f"""
    <html>
    <body style="font-family: Arial, sans-serif; padding: 20px; background: #f8fafc;">
        <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px;">
            <h2 style="color: #0f172a; margin-bottom: 20px;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Name:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">{contact_obj.name}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Email:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">{contact_obj.email}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Company:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">{contact_obj.company or 'N/A'}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Subject:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">{contact_obj.subject}</td></tr>
                <tr><td style="padding: 10px 0;"><strong>Message:</strong></td><td style="padding: 10px 0;">{contact_obj.message}</td></tr>
            </table>
        </div>
    </body>
    </html>
    """
    
    await send_notification_email(
        f"Contact Form: {contact_obj.subject}",
        html_content
    )
    
    return contact_obj

@api_router.get("/contacts", response_model=List[Contact])
async def get_contacts():
    contacts = await db.contacts.find({}, {"_id": 0}).to_list(1000)
    for contact in contacts:
        if isinstance(contact.get('created_at'), str):
            contact['created_at'] = datetime.fromisoformat(contact['created_at'])
    return contacts

# Include the router
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
