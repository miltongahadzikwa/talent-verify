// src/api.js

import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

export const getCompanies = () => API.get('/companies/');
export const getEmployees = () => API.get('/employees/');
export const createEmployee = (employee) => API.post('/employees/', employee);
export const updateEmployee = (id, employee) => API.put(`/employees/${id}/`, employee);
export const deleteEmployee = (id) => API.delete(`/employees/${id}/`);
