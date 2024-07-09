import React, { useState } from 'react';
import axios from 'axios';

function EmployeeForm() {
    const [employee, setEmployee] = useState({
        name: '',
        employee_id: '',
        department: '',
        role: '',
        date_started: '',
        date_left: '',
        duties: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/employees/', employee)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="employee_id" value={employee.employee_id} onChange={handleChange} placeholder="Employee ID" />
            <input type="text" name="department" value={employee.department} onChange={handleChange} placeholder="Department" />
            <input type="text" name="role" value={employee.role} onChange={handleChange} placeholder="Role" />
            <input type="date" name="date_started" value={employee.date_started} onChange={handleChange} />
            <input type="date" name="date_left" value={employee.date_left} onChange={handleChange} />
            <textarea name="duties" value={employee.duties} onChange={handleChange} placeholder="Duties"></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}

export default EmployeeForm;
