// src/EmployeeList.js
import React, { useState, useEffect } from 'react';
import { getEmployees } from './api';  // Import the API service

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getEmployees();
                setEmployees(data);
            } catch (error) {
                console.error('Error fetching employees', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Employee List</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        {employee.name} - {employee.department} - {employee.role}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeList;

