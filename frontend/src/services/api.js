import axios from 'axios';

export const saveEmailTemplate = async (emailData) => {
  try {
    const response = await axios.post('/api/save', emailData);
    return response.data;
  } catch (error) {
    console.error('Error saving email template:', error);
    throw error;
  }
};
