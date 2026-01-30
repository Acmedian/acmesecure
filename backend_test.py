import requests
import sys
from datetime import datetime

class AcmeSecureAPITester:
    def __init__(self, base_url="https://cyber-risk-platform.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/api/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if response.content:
                    try:
                        response_data = response.json()
                        print(f"   Response: {response_data}")
                        return True, response_data
                    except:
                        print(f"   Response: {response.text[:200]}...")
                        return True, {}
                return True, {}
            else:
                self.failed_tests.append({
                    'test': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'response': response.text[:200] if response.text else 'No response'
                })
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                return False, {}

        except Exception as e:
            self.failed_tests.append({
                'test': name,
                'error': str(e)
            })
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test("Root API", "GET", "", 200)

    def test_demo_request_creation(self):
        """Test demo request creation"""
        demo_data = {
            "name": "John Smith",
            "company": "Test Corp",
            "email": "john.smith@testcorp.com",
            "role": "CISO",
            "industry": "Technology",
            "message": "Interested in a demo"
        }
        return self.run_test("Create Demo Request", "POST", "demo-request", 200, demo_data)

    def test_demo_request_validation(self):
        """Test demo request validation with missing fields"""
        invalid_data = {
            "name": "John Smith"
            # Missing required fields
        }
        success, _ = self.run_test("Demo Request Validation", "POST", "demo-request", 422, invalid_data)
        return success

    def test_contact_creation(self):
        """Test contact form submission"""
        contact_data = {
            "name": "Jane Doe",
            "email": "jane.doe@example.com",
            "company": "Example Inc",
            "subject": "General Inquiry",
            "message": "I have a question about your services"
        }
        return self.run_test("Create Contact", "POST", "contact", 200, contact_data)

    def test_get_demo_requests(self):
        """Test retrieving demo requests"""
        return self.run_test("Get Demo Requests", "GET", "demo-requests", 200)

    def test_get_contacts(self):
        """Test retrieving contacts"""
        return self.run_test("Get Contacts", "GET", "contacts", 200)

    def test_status_check_creation(self):
        """Test status check creation"""
        status_data = {
            "client_name": "test_client"
        }
        return self.run_test("Create Status Check", "POST", "status", 200, status_data)

    def test_get_status_checks(self):
        """Test retrieving status checks"""
        return self.run_test("Get Status Checks", "GET", "status", 200)

def main():
    print("🚀 Starting AcmeSecure API Tests")
    print("=" * 50)
    
    tester = AcmeSecureAPITester()

    # Run all tests
    print("\n📋 Running Backend API Tests...")
    
    # Basic connectivity
    tester.test_root_endpoint()
    
    # Core functionality tests
    tester.test_demo_request_creation()
    tester.test_demo_request_validation()
    tester.test_contact_creation()
    
    # Data retrieval tests
    tester.test_get_demo_requests()
    tester.test_get_contacts()
    
    # Status check tests
    tester.test_status_check_creation()
    tester.test_get_status_checks()

    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for failure in tester.failed_tests:
            print(f"   - {failure.get('test', 'Unknown')}: {failure}")
    
    success_rate = (tester.tests_passed / tester.tests_run) * 100 if tester.tests_run > 0 else 0
    print(f"📈 Success Rate: {success_rate:.1f}%")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())