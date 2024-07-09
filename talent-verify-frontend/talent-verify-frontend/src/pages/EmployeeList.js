import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/employees/')
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the employees!', error);
            });
    }, []);

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>{employee.first_name} {employee.last_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
