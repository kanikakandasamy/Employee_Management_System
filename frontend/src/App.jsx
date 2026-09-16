import { useEffect, useMemo, useState } from "react";

const API_URL = "http://127.0.0.1:8000/api/employees/";

const emptyForm = {
  employee_id: "",
  name: "",
  email: "",
  phone: "",
  department: "",
  designation: "",
  salary: "",
  joining_date: "",
};

function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Get unique departments
  const departments = useMemo(
    () =>
      [...new Set(employees.map((employee) => employee.department))].sort(),
    [employees]
  );
  const filteredEmployees = useMemo(() => {
  const searchText = search.trim().toLowerCase();

  return employees.filter((employee) => {
    const matchesSearch =
      !searchText ||
      employee.employee_id.toLowerCase().includes(searchText) ||
      employee.name.toLowerCase().includes(searchText) ||
      employee.email.toLowerCase().includes(searchText) ||
      employee.department.toLowerCase().includes(searchText) ||
      employee.designation.toLowerCase().includes(searchText);

    const matchesDepartment =
      !department ||
      employee.department === department;

    return matchesSearch && matchesDepartment;
  });
}, [employees, search, department]);

  // Success message
  const showMessage = (text) => {
    setMessage(text);
    setError("");

    window.setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  // Error message
  const showError = (text) => {
    setError(text);
    setMessage("");
  };

  // Load employees from Django API
  const loadEmployees = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams();

      if (search.trim()) {
        params.set("search", search.trim());
      }

      if (department) {
        params.set("department", department);
      }

      const query = params.toString();

      const response = await fetch(
        query ? `${API_URL}?${query}` : API_URL
      );

      if (!response.ok) {
        throw new Error("Unable to load employees.");
      }

      const data = await response.json();

      setEmployees(data);
      setError("");
    } catch (err) {
      showError(
        `${err.message} Make sure Django and MySQL are running.`
      );
    } finally {
      setLoading(false);
    }
  };

  // Load employees whenever search or department changes
  useEffect(() => {
    const timer = window.setTimeout(() => {
      loadEmployees();
    }, 250);

    return () => window.clearTimeout(timer);
  }, [search, department]);

  // Handle form input changes
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // Validate form
  const validateForm = () => {
    if (
      !form.employee_id.trim() ||
      !form.name.trim() ||
      !form.email.trim()
    ) {
      return "Employee ID, name and email are required.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Please enter a valid email address.";
    }

    if (!/^\d{10,15}$/.test(form.phone)) {
      return "Phone must contain 10 to 15 digits.";
    }

    if (
      !form.department.trim() ||
      !form.designation.trim()
    ) {
      return "Department and designation are required.";
    }

    if (Number(form.salary) <= 0) {
      return "Salary must be greater than 0.";
    }

    if (!form.joining_date) {
      return "Joining date is required.";
    }

    return "";
  };

  // Add or update employee
  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      showError(validationError);
      return;
    }

    const payload = {
      ...form,
      employee_id: form.employee_id.trim().toUpperCase(),
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      department: form.department.trim(),
      designation: form.designation.trim(),
    };

    const url = editingId
      ? `${API_URL}${editingId}/`
      : API_URL;

    try {
      setLoading(true);

      const response = await fetch(url, {
        method: editingId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        const details = Object.entries(data)
          .map(([field, value]) => {
            const message = Array.isArray(value)
              ? value.join(", ")
              : value;

            return `${field}: ${message}`;
          })
          .join(" | ");

        throw new Error(details || "Request failed.");
      }

      if (editingId) {
        showMessage("Employee updated successfully.");
      } else {
        showMessage("Employee added successfully.");
      }

      setForm(emptyForm);
      setEditingId(null);

      await loadEmployees();
    } catch (err) {
      showError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Edit employee
  const editEmployee = (employee) => {
    setEditingId(employee.id);

    setForm({
      employee_id: employee.employee_id || "",
      name: employee.name || "",
      email: employee.email || "",
      phone: employee.phone || "",
      department: employee.department || "",
      designation: employee.designation || "",
      salary: employee.salary || "",
      joining_date: employee.joining_date || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Delete employee
  const deleteEmployee = async (id) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this employee?"
      )
    ) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}${id}/`,
        {
          method: "DELETE",
        }
      );

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(
          data.detail || "Delete failed."
        );
      }

      showMessage(
        data.message || "Employee deleted successfully."
      );

      await loadEmployees();
    } catch (err) {
      showError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
    setError("");
    setMessage("");
  };

  return (
    <div className="app-shell">

      {/* HEADER */}
      <header className="hero">
        <div>
          <p className="eyebrow">
            FULL-STACK CRUD APPLICATION
          </p>

          <h1>
            Employee Management System
          </h1>

          <p className="subtitle">
            Manage employee records with React,
            Django REST Framework and MySQL.
          </p>
        </div>

        {/* TOTAL EMPLOYEE COUNT */}
        <div className="stats-card">
          <span>Total Employees</span>

          <strong>
            {employees.length}
          </strong>
        </div>
      </header>

      <main className="content">

        {/* SUCCESS MESSAGE */}
        {message && (
          <div className="alert success">
            ✓ {message}
          </div>
        )}

        {/* ERROR MESSAGE */}
        {error && (
          <div className="alert error">
            ✕ {error}
          </div>
        )}

        {/* ADD / EDIT FORM */}
        <section className="panel form-panel">

          <div className="section-heading">
            <div>
              <p className="eyebrow">
                {editingId
                  ? "EDIT RECORD"
                  : "NEW RECORD"}
              </p>

              <h2>
                {editingId
                  ? "Update Employee"
                  : "Add Employee"}
              </h2>
            </div>

            {editingId && (
              <button
                className="secondary"
                onClick={cancelEdit}
              >
                Cancel Edit
              </button>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="employee-form"
          >

            <label>
              Employee ID

              <input
                name="employee_id"
                value={form.employee_id}
                onChange={handleChange}
                placeholder="EMP001"
              />
            </label>

            <label>
              Full Name

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Arun Kumar"
              />
            </label>

            <label>
              Email

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="arun@example.com"
              />
            </label>

            <label>
              Phone

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="9876543210"
                maxLength="15"
              />
            </label>

            <label>
              Department

              <input
                name="department"
                value={form.department}
                onChange={handleChange}
                placeholder="IT"
              />
            </label>

            <label>
              Designation

              <input
                name="designation"
                value={form.designation}
                onChange={handleChange}
                placeholder="Software Developer"
              />
            </label>

            <label>
              Salary

              <input
                type="number"
                name="salary"
                value={form.salary}
                onChange={handleChange}
                placeholder="45000"
                min="1"
                step="0.01"
              />
            </label>

            <label>
              Joining Date

              <input
                type="date"
                name="joining_date"
                value={form.joining_date}
                onChange={handleChange}
              />
            </label>

            <div className="form-actions">

              <button
                className="primary"
                type="submit"
                disabled={loading}
              >
                {editingId
                  ? "Update Employee"
                  : "Add Employee"}
              </button>

              {editingId && (
                <button
                  type="button"
                  className="secondary"
                  onClick={cancelEdit}
                >
                  Clear
                </button>
              )}

            </div>

          </form>
        </section>

        {/* EMPLOYEE DIRECTORY */}
        <section className="panel">

          <div className="section-heading list-heading">

            <div>
              <p className="eyebrow">
                EMPLOYEE DIRECTORY
              </p>

              <h2>
                Employee Records
              </h2>
            </div>

            <span className="record-count">
              {employees.length} record
              {employees.length === 1 ? "" : "s"}
            </span>

          </div>

          {/* SEARCH AND FILTER */}
          <div className="filters">

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search ID, name, email, department..."
            />

            <select
              value={department}
              onChange={(e) =>
                setDepartment(e.target.value)
              }
            >
              <option value="">
                All Departments
              </option>

              {departments.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

          </div>

          {/* EMPLOYEE TABLE */}
          <div className="table-wrap">

            <table>

              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Designation</th>
                  <th>Salary</th>
                  <th>Joining Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
  {filteredEmployees.length === 0 ? (
    <tr>
      <td colSpan="8" className="empty">
        {loading ? "Loading..." : "No employees found."}
      </td>
    </tr>
  ) : (
    filteredEmployees.map((employee) => (
      <tr key={employee.id}>
        <td>
          <strong>{employee.employee_id}</strong>
        </td>

        <td>{employee.name}</td>

        <td>{employee.email}</td>

        <td>
          <span className="badge">
            {employee.department}
          </span>
        </td>

        <td>{employee.designation}</td>

        <td>
          ₹{" "}
          {Number(employee.salary).toLocaleString("en-IN", {
            minimumFractionDigits: 2,
          })}
        </td>

        <td>{employee.joining_date}</td>

        <td className="actions">
          <button
            className="edit"
            onClick={() => editEmployee(employee)}
          >
            Edit
          </button>

          <button
            className="delete"
            onClick={() => deleteEmployee(employee.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>
            </table>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer>
        Employee Management System • React + Django REST + MySQL
      </footer>

    </div>
  );
}

export default App;