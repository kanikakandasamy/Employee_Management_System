# Postman Examples

Base URL: `http://127.0.0.1:8000/api/employees/`

## Create - POST

URL: `/api/employees/`

Body → raw → JSON:

```json
{
  "employee_id": "EMP001",
  "name": "Arun Kumar",
  "email": "arun@example.com",
  "phone": "9876543210",
  "department": "IT",
  "designation": "Software Developer",
  "salary": "45000.00",
  "joining_date": "2026-01-10"
}
```

Expected status: `201 Created`

## Read All - GET

`/api/employees/`

Expected status: `200 OK`

## Read One - GET

`/api/employees/1/`

Expected status: `200 OK` for an existing ID.

## Update - PUT

`/api/employees/1/`

Use the same JSON body with changed values.

Expected status: `200 OK`

## Delete - DELETE

`/api/employees/1/`

Expected status: `200 OK` with a success message.
