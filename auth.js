import axios from 'axios';

// Replace with your API URL
const API_URL = 'http://localhost:5000/api'; // Update this with your backend URL

export const registerUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      password
    });
    console.log('Registration Response:', response.data); // Log the response from the server
    return response.data; // Return the data (e.g., user details or token)
  } catch (error) {
    // Log more detailed error information
    console.error('Registration Error:', error.response ? error.response.data : error.message);
    throw new Error(error.response?.data?.message || 'Error occurred during registration');
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password
    });
    console.log('Login Response:', response.data); // Log the response from the server
    const { token, highScore, userId } = response.data;
    return { token, highScore, userId }; // Return token, high score, and user ID
  } catch (error) {
    // Log more detailed error information
    console.error('Login Error:', error.response ? error.response.data : error.message);
    throw new Error(error.response?.data?.message || 'Error occurred during login');
  }
};