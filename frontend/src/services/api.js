import axios from 'axios';

// Use the environment variable for the base URL
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const saveEmailTemplate = async (emailData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/save`, emailData);
    return response.data;
  } catch (error) {
    console.error('Error saving email template:', error);
    throw error;
  }
};
