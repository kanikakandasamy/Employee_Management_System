# Employee Management System

## 1. Project Overview

The **Employee Management System** is a full-stack web application developed to manage employee records efficiently.

The system allows users to:

* Add new employee records.
* View all employee records.
* Update existing employee information.
* Delete employee records.
* Search employees by ID, name, email, department, or designation.
* Filter employees by department.
* Validate employee information before saving.
* Handle API and database errors.

### Technology Used

* **Frontend:** React, JavaScript, HTML, CSS
* **Backend:** Django REST Framework
* **Database:** MySQL
* **API Testing:** Postman
* **Version Control:** Git and GitHub
* **Development Tool:** VS Code

### System Flow

```text
User
  ↓
React Frontend
  ↓
Django REST Framework
  ↓
REST API
  ↓
MySQL Database
```

### GitHub Repository

https://github.com/kanikakandasamy/Employee_Management_System

## 2. Problem Statement

Managing employee information manually using paper records or separate files can make it difficult to maintain accurate and organized data.

Common problems include:

* Difficulty in maintaining employee records.
* Time-consuming manual data entry.
* Difficulty searching for a particular employee.
* Updating employee information manually.
* Risk of duplicate or incorrect information.
* Difficulty removing outdated records.
* Lack of centralized employee data.
* Limited validation of entered information.
* Difficulty accessing employee information quickly.
* Lack of a simple interface for CRUD operations.

Therefore, a **web-based Employee Management System** is developed to provide a centralized platform for managing employee records using CRUD operations.

## 3. Objectives

The main objectives of the Employee Management System are:

1. To develop a user-friendly web application for managing employee records.
2. To implement **Create, Read, Update, and Delete (CRUD)** operations.
3. To store employee information securely in a MySQL database.
4. To develop REST APIs using Django REST Framework.
5. To connect the React frontend with the backend API.
6. To provide search functionality for employee records.
7. To provide department-based filtering.
8. To implement client-side and server-side validation.
9. To provide meaningful success and error messages.
10. To test the application and REST APIs using Postman.
11. To maintain the project using Git and GitHub.
12. To provide proper project documentation and demonstrate the complete application.

## 4. Scope of the Project

The Employee Management System covers the development of a complete full-stack application for maintaining employee records.

### The scope includes:

* Employee record creation.
* Displaying employee records.
* Updating existing employee information.
* Deleting employee records.
* Searching employee records.
* Filtering employees by department.
* Client-side form validation.
* Server-side API validation.
* MySQL database integration.
* REST API development.
* Frontend and backend integration.
* Error handling and user notifications.
* API testing using Postman.
* Version control using Git and GitHub.
* Responsive web interface for different screen sizes.

### Users

The application is designed for users who need to maintain and manage employee information in an organized digital system.

### Limitations

The current version is primarily intended for **academic and local development purposes**. Advanced features such as authentication, role-based access control, cloud deployment, payroll processing, and employee attendance management are not included in the current version.

## 5. Technology Stack

The Employee Management System uses the following technologies:

| Layer             | Technology            | Purpose                                           |
| ----------------- | --------------------- | ------------------------------------------------- |
| Frontend          | React                 | Develop the interactive user interface            |
| Frontend Language | JavaScript            | Implement application logic and API communication |
| Markup            | HTML                  | Structure the web interface                       |
| Styling           | CSS                   | Design and responsive layout                      |
| Backend           | Django                | Develop the server-side application               |
| API Framework     | Django REST Framework | Create RESTful APIs                               |
| Database          | MySQL                 | Store employee records                            |
| API Testing       | Postman               | Test REST API endpoints                           |
| Code Editor       | VS Code               | Development and debugging                         |
| Version Control   | Git                   | Track source-code changes                         |
| Repository        | GitHub                | Store and manage the project source code          |

### Why These Technologies Were Used

* **React** provides a dynamic and component-based frontend.
* **Django REST Framework** simplifies REST API development.
* **MySQL** provides structured and persistent data storage.
* **Postman** allows independent testing of API operations.
* **Git and GitHub** help maintain and share the project source code.

## 6. System Architecture

The Employee Management System follows a three-layer full-stack architecture.

### Architecture Flow

```text
┌─────────────────────────────┐
│           USER              │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│      React Frontend         │
│     HTML + CSS + JS         │
└──────────────┬──────────────┘
               │ HTTP / JSON
               ▼
┌─────────────────────────────┐
│    Django REST Framework    │
│        REST API             │
└──────────────┬──────────────┘
               │ ORM / SQL
               ▼
┌─────────────────────────────┐
│       MySQL Database        │
│     Employee Records        │
└─────────────────────────────┘
```

### Architecture Components

**1. User Interface Layer**

The React frontend provides forms, employee tables, search, filtering, and CRUD action buttons.

**2. Backend/API Layer**

Django REST Framework receives HTTP requests from the frontend, validates the data, performs CRUD operations, and returns JSON responses.

**3. Database Layer**

MySQL stores employee information and maintains the persistent data used by the application.

### Data Flow

1. The user performs an operation through the React interface.
2. React sends an HTTP request to the Django REST API.
3. Django processes and validates the request.
4. Django communicates with MySQL through the Django ORM.
5. MySQL stores or retrieves the requested data.
6. Django returns a JSON response.
7. React updates the interface based on the response.

## 7. Database Design

The Employee Management System uses **MySQL** for storing employee information. The database provides persistent storage and allows the application to perform CRUD operations.

### Database Name

```text
employee_management
```

### Employee Table

The main table used by the application is:

```text
employees
```

### Employee Table Structure

| Field        | Data Type | Description                |
| ------------ | --------- | -------------------------- |
| id           | Integer   | Primary key                |
| employee_id  | String    | Unique employee identifier |
| name         | String    | Employee full name         |
| email        | String    | Employee email address     |
| phone        | String    | Employee phone number      |
| department   | String    | Employee department        |
| designation  | String    | Employee job designation   |
| salary       | Decimal   | Employee salary            |
| joining_date | Date      | Employee joining date      |

### Database Constraints

* `id` is used as the primary key.
* `employee_id` must be unique.
* `email` must be unique.
* Required fields cannot be empty.
* Salary must contain a valid positive value.
* The joining date must contain a valid date.

### Database Operations

The application performs the following database operations:

* **INSERT** — Add a new employee.
* **SELECT** — Retrieve employee records.
* **UPDATE** — Modify employee information.
* **DELETE** — Remove an employee record.

### Entity Relationship Representation

```text
┌──────────────────────────────────────┐
│              EMPLOYEES               │
├──────────────────────────────────────┤
│ PK  id                               │
│ UQ  employee_id                      │
│     name                             │
│ UQ  email                            │
│     phone                            │
│     department                       │
│     designation                      │
│     salary                           │
│     joining_date                     │
└──────────────────────────────────────┘
```

The current application primarily uses a single employee entity, so there are no additional entity relationships in the current database design.

## 8. Frontend Development and UI

The frontend of the Employee Management System is developed using **React, JavaScript, HTML, and CSS**.

The interface is designed to provide a simple and responsive way to manage employee records.

### Main UI Components

**1. Header**

Displays the project title, description, and total number of employees.

**2. Employee Form**

The form is used for both adding and updating employee records.

It contains:

* Employee ID
* Full Name
* Email
* Phone
* Department
* Designation
* Salary
* Joining Date

**3. Employee Directory**

Displays employee records in a structured table containing:

* Employee ID
* Name
* Email
* Department
* Designation
* Salary
* Joining Date
* Actions

**4. Search**

Users can search employee records using:

* Employee ID
* Name
* Email
* Department
* Designation

**5. Department Filter**

A dropdown allows users to filter employees according to their department.

**6. CRUD Actions**

The interface provides:

* Add Employee
* Edit Employee
* Delete Employee
* Cancel Edit
* Clear Form

**7. Validation and Messages**

The application displays success and error messages when an operation is completed or when invalid information is entered.

### Frontend API Communication

The React application communicates with the Django REST API using the JavaScript `fetch()` function.

The main API URL is:

```text id="0l2j8x"
http://127.0.0.1:8000/api/employees/
```

JSON is used for sending employee information to the backend and receiving employee data from the API.

## 9. CRUD Implementation

The Employee Management System implements all four fundamental CRUD operations.

### 9.1 Create Employee

The **Create** operation allows users to add a new employee.

**Process:**

1. User enters employee information in the form.
2. React performs client-side validation.
3. The data is converted into JSON.
4. React sends a `POST` request to the Django API.
5. Django validates the received data.
6. The employee record is stored in MySQL.
7. A success message is displayed.
8. The employee list is refreshed.

**HTTP Method:**

```text
POST
```

**Endpoint:**

```text
/api/employees/
```

---

### 9.2 Read Employee

The **Read** operation retrieves employee records from the database.

**Read All:**

```text
GET /api/employees/
```

**Read One:**

```text
GET /api/employees/{id}/
```

The React frontend displays the received employee information in the Employee Directory table.

---

### 9.3 Update Employee

The **Update** operation allows users to modify an existing employee record.

**Process:**

1. User clicks the **Edit** button.
2. Existing employee data is loaded into the form.
3. User modifies the required information.
4. React validates the data.
5. A `PUT` request is sent to the backend.
6. Django updates the database record.
7. The updated employee information is displayed.

**HTTP Method:**

```text
PUT
```

**Endpoint:**

```text
/api/employees/{id}/
```

---

### 9.4 Delete Employee

The **Delete** operation removes an employee record.

**Process:**

1. User clicks the **Delete** button.
2. The application asks for confirmation.
3. A `DELETE` request is sent to the backend.
4. Django removes the record from MySQL.
5. A success message is displayed.
6. The employee list is refreshed.

**HTTP Method:**

```text
DELETE
```

**Endpoint:**

```text
/api/employees/{id}/
```

### CRUD Summary

| Operation | Method | Endpoint               | Result                 |
| --------- | ------ | ---------------------- | ---------------------- |
| Create    | POST   | `/api/employees/`      | New employee created   |
| Read All  | GET    | `/api/employees/`      | All employees returned |
| Read One  | GET    | `/api/employees/{id}/` | One employee returned  |
| Update    | PUT    | `/api/employees/{id}/` | Employee updated       |
| Delete    | DELETE | `/api/employees/{id}/` | Employee deleted       |

## 10. Validation and Error Handling

The application uses both **client-side and server-side validation** to maintain valid and consistent employee data.

### 10.1 Client-Side Validation

The React frontend checks employee information before sending it to the backend.

The following validations are implemented:

* Employee ID is required.
* Employee name is required.
* Email is required.
* Email must follow a valid format.
* Phone number must contain 10 to 15 digits.
* Department is required.
* Designation is required.
* Salary must be greater than zero.
* Joining date is required.

If invalid data is entered, an error message is displayed without sending the request.

### 10.2 Server-Side Validation

Django REST Framework validates the data received from the frontend.

Server-side validation helps ensure that invalid data cannot be stored even if frontend validation is bypassed.

The API also handles:

* Duplicate Employee IDs.
* Duplicate email addresses.
* Invalid employee IDs.
* Invalid or missing fields.
* Invalid update requests.
* Invalid delete requests.

### 10.3 Error Handling

The React application displays meaningful messages when an API request fails.

For example:

```text
Employee ID, name and email are required.
```

```text
Please enter a valid email address.
```

```text
Phone must contain 10 to 15 digits.
```

```text
Salary must be greater than 0.
```

The application also displays an error when the Django backend or MySQL database is unavailable.

### 10.4 Success Messages

After successful operations, the application displays messages such as:

```text
Employee added successfully.
```

```text
Employee updated successfully.
```

```text
Employee deleted successfully.
```

This provides immediate feedback to the user.

## 11. REST API Documentation

The backend provides RESTful APIs using **Django REST Framework**. The APIs use HTTP methods and JSON data to perform employee management operations.

### Base URL

```text
http://127.0.0.1:8000/api/employees/
```

### API Endpoints

| Operation | HTTP Method | Endpoint               | Purpose                |
| --------- | ----------- | ---------------------- | ---------------------- |
| Create    | POST        | `/api/employees/`      | Create a new employee  |
| Read All  | GET         | `/api/employees/`      | Retrieve all employees |
| Read One  | GET         | `/api/employees/{id}/` | Retrieve one employee  |
| Update    | PUT         | `/api/employees/{id}/` | Update an employee     |
| Delete    | DELETE      | `/api/employees/{id}/` | Delete an employee     |

### API Request and Response

The API accepts employee information in JSON format.

Example:

```json
{
    "employee_id": "EMP004",
    "name": "Karthik Kumar",
    "email": "karthik@example.com",
    "phone": "9876543212",
    "department": "Finance",
    "designation": "Accountant",
    "salary": "50000",
    "joining_date": "2026-09-16"
}
```

A successful response returns the employee information along with its database ID.

### Postman Testing

The REST API was tested using **Postman**.

The following operations were tested:

* GET all employees.
* GET a single employee.
* POST a new employee.
* PUT an existing employee.
* DELETE an employee.
* Verify that the deleted employee cannot be retrieved.
* Test an invalid employee ID.

### Testing Result

The API returned successful responses for the valid CRUD operations. Invalid employee IDs were handled with an appropriate `404 Not Found` response.

Postman was used to independently verify the backend API before and during frontend integration.

## 12. Testing Results

Testing was performed to verify that the Employee Management System works correctly at the frontend, backend, API, and database levels.

### 12.1 Functional Test Cases

| Test ID | Test Case                    | Expected Result                           | Status |
| ------- | ---------------------------- | ----------------------------------------- | ------ |
| TC01    | Add employee with valid data | Employee is created                       | PASS   |
| TC02    | View all employees           | Employee records are displayed            | PASS   |
| TC03    | View one employee            | Selected employee is displayed            | PASS   |
| TC04    | Update employee details      | Employee information is updated           | PASS   |
| TC05    | Delete employee              | Employee is removed                       | PASS   |
| TC06    | Verify deleted employee      | `404 Not Found` is returned               | PASS   |
| TC07    | Search employee              | Matching records are displayed            | PASS   |
| TC08    | Filter by department         | Selected department records are displayed | PASS   |
| TC09    | Submit empty required fields | Validation error is displayed             | PASS   |
| TC10    | Enter invalid email          | Validation error is displayed             | PASS   |
| TC11    | Enter invalid phone number   | Validation error is displayed             | PASS   |
| TC12    | Enter invalid salary         | Validation error is displayed             | PASS   |
| TC13    | Use duplicate Employee ID    | Duplicate value is rejected               | PASS   |
| TC14    | Use duplicate email          | Duplicate value is rejected               | PASS   |
| TC15    | Request invalid employee ID  | `404 Not Found` is returned               | PASS   |

### 12.2 API Testing

The REST API was tested using Postman for:

* `GET` — Retrieve employees.
* `POST` — Create an employee.
* `PUT` — Update an employee.
* `DELETE` — Delete an employee.
* Invalid employee ID handling.

### 12.3 Database Verification

After CRUD operations, the employee records were verified using **MySQL Workbench**.

The database was checked to confirm that:

* New employees were stored correctly.
* Updated employee information was reflected in the database.
* Deleted employees were removed from the database.
* Employee records could be retrieved correctly.

### 12.4 Frontend Testing

The React application was tested to verify:

* Employee form functionality.
* Add operation.
* Edit operation.
* Delete operation.
* Search functionality.
* Department filtering.
* Validation messages.
* Success messages.
* Error handling.

### Overall Result

All major functional requirements of the Employee Management System were tested successfully.

## 13. Installation and Execution Steps

### 13.1 Prerequisites

The following software is required:

* Python 3.11 or later
* Node.js 18 or later
* MySQL
* MySQL Workbench
* VS Code
* Git
* Postman

### 13.2 Database Setup

1. Start the MySQL server.
2. Open MySQL Workbench.
3. Create the database:

```sql
CREATE DATABASE employee_management;
```

4. Configure the database connection in the Django project.
5. Run the Django migrations.

### 13.3 Backend Setup

Open a terminal in the `backend` folder:

```bash
cd Employee_Management_System/backend
```

Create and activate the Python virtual environment:

```bash
python -m venv venv
```

Windows PowerShell:

```powershell
venv\Scripts\Activate.ps1
```

Install the required packages:

```bash
pip install -r requirements.txt
```

Apply migrations:

```bash
python manage.py migrate
```

Start the Django development server:

```bash
python manage.py runserver
```

The backend API will normally be available at:

```text
http://127.0.0.1:8000/
```

### 13.4 Frontend Setup

Open another terminal and navigate to the frontend folder:

```bash
cd Employee_Management_System/frontend
```

Install the required packages:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173/
```

### 13.5 Running the Complete Application

The application requires both servers to be running:

```text
MySQL
  ↓
Django Backend
  ↓
React Frontend
```

The user can then open the React application in a web browser and perform employee CRUD operations.

### 13.6 API Testing

Postman can be used to test the backend independently.

Base API URL:

`
## 14. Challenges and Solutions

During the development and testing of the Employee Management System, several technical challenges were encountered and resolved.

### 14.1 Frontend–Backend Connection

**Challenge:**
The React frontend initially could not communicate with the Django API.

**Solution:**
The API URL and backend server configuration were checked, and the Django server was started correctly before running the React application.

### 14.2 CORS Configuration

**Challenge:**
The React frontend and Django backend run on different ports during development.

**Solution:**
Django CORS configuration was used to allow requests from the React development server.

### 14.3 Database Connectivity

**Challenge:**
The backend requires an active MySQL server to store and retrieve employee records.

**Solution:**
The MySQL service was started and the Django database configuration was verified.

### 14.4 Form Validation

**Challenge:**
Invalid employee information could affect data quality.

**Solution:**
Validation was implemented in both the React frontend and Django REST Framework backend.

### 14.5 Duplicate Records

**Challenge:**
Employee IDs and email addresses should not be duplicated.

**Solution:**
Unique constraints and server-side validation were implemented.

### 14.6 API Testing

**Challenge:**
Frontend testing alone does not verify whether the REST API works independently.

**Solution:**
Postman was used to test GET, POST, PUT, and DELETE requests separately.

### 14.7 Git and GitHub

**Challenge:**
The project needed to be maintained and uploaded using version control.

**Solution:**
Git was initialized, meaningful commits were created, and the project was successfully pushed to GitHub.

### 14.8 Environment Setup

**Challenge:**
The backend and frontend require separate environments and terminals.

**Solution:**
A Python virtual environment was used for Django depende

## 15. Future Enhancements

The current Employee Management System provides the core employee CRUD functionality. The following features can be added in future versions:

1. **User Authentication**
   Add secure login and logout functionality.

2. **Role-Based Access Control**
   Provide different permissions for administrators, HR staff, and other users.

3. **Employee Profile Management**
   Allow users to maintain detailed employee profiles.

4. **Attendance Management**
   Add employee attendance tracking.

5. **Leave Management**
   Provide leave application and approval functionality.

6. **Payroll Management**
   Add salary and payroll-related features.

7. **Dashboard and Analytics**
   Display employee statistics using charts and graphical reports.

8. **Cloud Deployment**
   Deploy the application so that it can be accessed remotely.

9. **Email Notifications**
   Send automated notifications fo

## 16. GitHub and Version Control

Git was used for source-code management and GitHub was used to host the project repository.

### Git Repository

The project was initialized as a Git repository using:

```bash
git init
```

Project files were added using:

```bash
git add .
```

An initial commit was created using:

```bash
git commit -m "Initial commit - Employee Management System"
```

The project was then pushed to GitHub using:

```bash
git push -u origin main
```

### Repository

**GitHub Repository:**

https://github.com/kanikakandasamy/Employee_Management_System

### Repository Structure

```text
Employee_Management_System/
├── backend/
├── frontend/
├── database/
├── documentation/
├── .gitignore
└── README.md
```

### Version Control Practices

* Meaningful commit messages were used.
* The project source code was pushed to GitHub.
* A `.gitignore` file was included.
* The Python virtual environment was excluded from version control.
* Project documentation was maintained in the repository.

## 17. Screenshots and Evidence

Screenshots were captured during the development and testing of the Employee Management System to provide evidence of the implemented functionality.

### Screenshot 1 — Employee Management Interface

Shows the main React application interface containing the employee form and employee directory.

**File:** `Screenshot_1_Home.png`

### Screenshot 2 — Add Employee

Shows the process of entering employee information and creating a new employee record.

**File:** `Screenshot_2_Add.png`

### Screenshot 3 — Employee Records

Shows employee records displayed in the Employee Directory after retrieving data from the backend.

**File:** `Screenshot_3_Records.png`

### Screenshot 4 — Edit Employee

Shows an existing employee record being edited and updated through the React interface.

**File:** `Screenshot_4_Edit.png`

### Screenshot 5 — Delete Employee

Shows the delete operation and confirmation process for removing an employee record.

**File:** `Screenshot_5_Delete.png`

### Screenshot 6 — MySQL Database

Shows employee records stored in the MySQL database using MySQL Workbench.

**File:** `Screenshot_6_Database.png`

### Screenshot 7 — Postman API Testing

Shows REST API testing using Postman for the Employee Management System.

**File:** `Screenshot_7_Postman.png`

### Evidence Summary

The screenshots provide visual evidence that the application interface, CRUD operations, database storage, and REST API functionality were implemented and tested.

## 18. Conclusion

The Employee Management System was successfully developed as a full-stack web application using **React, Django REST Framework, and MySQL**.

The application provides the essential CRUD operations required for managing employee records. Users can add, view, update, delete, search, and filter employee information through the React interface.

The Django REST Framework backend provides REST APIs for communication between the frontend and database. MySQL provides persistent storage for employee records.

Client-side and server-side validation were implemented to improve data accuracy and reliability. The REST APIs were tested using Postman, and database records were verified using MySQL Workbench.

The project was also maintained using Git and successfully uploaded to GitHub.

Overall, the project demonstrates the practical implementation of:

* Full-stack web development
* React frontend development
* REST API development
* Django backend development
* MySQL database integration
* CRUD operations
* Input validation
* API testing
* Git and GitHub version control

The project provides a strong foundation that can be extended with authentication, attendance, payroll, analytics, notifications, and other advanced features in future versions.
