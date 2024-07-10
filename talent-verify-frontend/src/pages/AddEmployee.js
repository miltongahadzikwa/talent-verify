// src/pages/AddEmployee.js
import React, { useState } from 'react';
import axios from 'axios';
import { createEmployee } from '../utils/api';
import CreateAddEmployee from '../components/CreateAddEmployee';

function AddEmployee() {
    const [employee, setEmployee] = useState({
        first_name: '',
        last_name: '',
        email: '',
        position: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/employees/', employee)
            .then(() => {
                setEmployee({
                    first_name: '',
                    last_name: '',
                    email: '',
                    position: ''
                });
            })
            .catch((error) => {
                console.error('There was an error creating the employee!', error);
            });
    };

    return (
        <div>
            <h1>Add Employee</h1>
            <CreateAddEmployee 
                employee={employee}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default AddEmployee;
