// src/services/api.js
import axios from 'axios';

// Base URL for the API
const API_URL = 'http://127.0.0.1:8000/api/';

// Create an instance of axios with the base URL
const api = axios.create({
    baseURL: API_URL,
});

// Employee API calls
export const getEmployees = () => api.get('employees/');
export const getEmployee = (id) => api.get(`employees/${id}/`);
export const createEmployee = (employee) => api.post('employees/', employee);
export const updateEmployee = (id, employee) => api.put(`employees/${id}/`, employee);
export const deleteEmployee = (id) => api.delete(`employees/${id}/`);

// Company API calls
export const getCompanies = () => api.get('companies/');
export const getCompany = (id) => api.get(`companies/${id}/`);
export const createCompany = (company) => api.post('companies/', company);
export const updateCompany = (id, company) => api.put(`companies/${id}/`, company);
export const deleteCompany = (id) => api.delete(`companies/${id}/`);

// Bulk Upload API calls
export const bulkUpload = (formData) => api.post('bulk-upload/', formData);

// Search API calls
export const search = (query) => api.get(`search/?q=${query}`);

export default api;
