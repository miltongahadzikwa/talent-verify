import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

export const getEmployees = async () => {
  try {
    const response = await axios.get(`${API_URL}employees/`);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the employees!', error);
  }
};