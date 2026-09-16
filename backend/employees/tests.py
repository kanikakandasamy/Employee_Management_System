from django.test import TestCase
from rest_framework.test import APIClient
from .models import Employee


class EmployeeAPITest(TestCase):
    def test_create_employee(self):
        client = APIClient()
        response = client.post('/api/employees/', {
            'employee_id': 'EMP001',
            'name': 'Test Employee',
            'email': 'test@example.com',
            'phone': '9876543210',
            'department': 'IT',
            'designation': 'Developer',
            'salary': '45000.00',
            'joining_date': '2026-01-10',
        }, format='json')
        self.assertEqual(response.status_code, 201)
        self.assertEqual(Employee.objects.count(), 1)
