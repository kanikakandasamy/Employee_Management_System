# Employee Management System

A complete CRUD-based full-stack web application developed using React, Django REST Framework and MySQL.

## Features

- Create employee records
- View all employees
- Update employee records
- Delete employee records
- Search by employee ID, name, email, department or designation
- Filter by department
- Client-side and server-side validation
- REST API
- Responsive interface
- MySQL persistence

## Technology Stack

- Frontend: React + Vite + CSS
- Backend: Django + Django REST Framework
- Database: MySQL
- API testing: Postman
- Version control: Git/GitHub

## Project Structure

```text
Employee_Management_System/
├── backend/
├── frontend/
├── database/
├── documentation/
├── .gitignore
└── README.md
```

## Requirements

- Python 3.11+ recommended
- Node.js 18+ recommended
- XAMPP/MySQL
- VS Code

## Run the Project

### 1. Database

Start MySQL from XAMPP and create the database:

```sql
CREATE DATABASE employee_management;
```

### 2. Backend

Open a terminal in `backend`:

Windows:

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The API runs at:

`http://127.0.0.1:8000/api/employees/`

### 3. Frontend

Open another terminal in `frontend`:

```bash
npm install
npm run dev
```

Open the URL shown by Vite, normally:

`http://localhost:5173/`

## REST API

| Operation | Method | Endpoint |
|---|---|---|
| Create | POST | `/api/employees/` |
| Read all | GET | `/api/employees/` |
| Read one | GET | `/api/employees/{id}/` |
| Update | PUT/PATCH | `/api/employees/{id}/` |
| Delete | DELETE | `/api/employees/{id}/` |
| Search | GET | `/api/employees/?search=IT` |
| Department filter | GET | `/api/employees/?department=IT` |

## Employee Fields

- Employee ID: unique
- Name
- Email: unique
- Phone
- Department
- Designation
- Salary
- Joining Date

## Demo Flow

1. Start MySQL.
2. Start Django backend.
3. Start React frontend.
4. Add an employee.
5. Verify the employee appears in the list.
6. Edit the employee.
7. Search/filter the employee.
8. Delete the employee.
9. Test the API in Postman.

## Notes

The supplied Django settings are configured for the common XAMPP MySQL setup: username `root`, empty password and port `3306`. If your MySQL credentials differ, edit `backend/employee_api/settings.py`.

This configuration is intended for local academic development. Production deployments should use environment variables for secrets and database credentials.
