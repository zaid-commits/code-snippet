import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Update this with your backend URL

export const generateExplanation = async (code: string, language: string): Promise<string> => {
  try {
    const response = await axios.post(`${API_URL}/explain`, { code, language });
    return response.data.explanation;
  } catch (error) {
    console.error('Error generating explanation:', error);
    return 'Failed to generate explanation. Please try again.';
  }
};

