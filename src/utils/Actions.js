import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const registerUser = data => axios.post(`${BASE_URL}/register`, data);
