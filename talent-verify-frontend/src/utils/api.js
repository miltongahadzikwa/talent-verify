import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

export const fetchEmployees = () => {
    return axios.get(`${API_URL}employees/`);
};

export const createEmployee = (employee) => {
    return axios.post(`${API_URL}employees/`, employee);
};

export const updateEmployee = (employee, id) => {
    return axios.put(`${API_URL}employees/${id}/`, employee);
};

export const deleteEmployee = (id) => {
    return axios.delete(`${API_URL}employees/${id}/`);
};
