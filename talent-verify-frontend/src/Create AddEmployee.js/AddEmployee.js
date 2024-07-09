import React, { useState } from 'react';

function AddEmployee() {
  const [employee, setEmployee] = useState({
    name: '',
    employeeId: '',
    department: '',
    role: '',
    startDate: '',
    duties: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee data:', employee);
    // Handle form submission, e.g., send data to backend
  };

  return (
    <div>
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={employee.name} onChange={handleChange} />
        </label>
        <label>
          Employee ID:
          <input type="text" name="employeeId" value={employee.employeeId} onChange={handleChange} />
        </label>
        <label>
          Department:
          <input type="text" name="department" value={employee.department} onChange={handleChange} />
        </label>
        <label>
          Role:
          <input type="text" name="role" value={employee.role} onChange={handleChange} />
        </label>
        <label>
          Start Date:
          <input type="date" name="startDate" value={employee.startDate} onChange={handleChange} />
        </label>
        <label>
          Duties:
          <textarea name="duties" value={employee.duties} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;