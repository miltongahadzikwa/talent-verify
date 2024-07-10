import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        first_name: '',
        last_name: '',
        email: '',
        position: ''
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:8000/api/employees/${id}/`)
                .then((response) => {
                    setEmployee(response.data);
                })
                .catch((error) => {
                    console.error('There was an error fetching the employee!', error);
                });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            axios.put(`http://127.0.0.1:8000/api/employees/${id}/`, employee)
                .then(() => {
                    navigate('/employees');
                })
                .catch((error) => {
                    console.error('There was an error updating the employee!', error);
                });
        } else {
            axios.post('http://127.0.0.1:8000/api/employees/', employee)
                .then(() => {
                    navigate('/employees');
                })
                .catch((error) => {
                    console.error('There was an error creating the employee!', error);
                });
        }
    };

    return (
        <div>
            <h2>{id ? 'Edit Employee' : 'Add Employee'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="first_name"
                        value={employee.first_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="last_name"
                        value={employee.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Position:</label>
                    <input
                        type="text"
                        name="position"
                        value={employee.position}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{id ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
