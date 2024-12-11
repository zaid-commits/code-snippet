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

export const translateCode = async (code: string, sourceLanguage: string, targetLanguage: string): Promise<string> => {
  try {
    const response = await axios.post(`${API_URL}/translate`, { code, sourceLanguage, targetLanguage });
    return response.data.translation;
  } catch (error) {
    console.error('Error translating code:', error);
    return 'Failed to translate code. Please try again.';
  }
};

export const summarizeCode = async (code: string, language: string): Promise<string> => {
  try {
    const response = await axios.post(`${API_URL}/summarize`, { code, language });
    return response.data.summary;
  } catch (error) {
    console.error('Error summarizing code:', error);
    return 'Failed to summarize code. Please try again.';
  }
};

export const checkBestPractices = async (code: string, language: string): Promise<string> => {
  try {
    const response = await axios.post(`${API_URL}/best-practices`, { code, language });
    return response.data.bestPractices;
  } catch (error) {
    console.error('Error checking best practices:', error);
    return 'Failed to check best practices. Please try again.';
  }
};

export const generateDiagram = async (code: string, language: string): Promise<string> => {
  try {
    const response = await axios.post(`${API_URL}/diagram`, { code, language });
    return response.data.diagram;
  } catch (error) {
    console.error('Error generating diagram:', error);
    return 'Failed to generate diagram. Please try again.';
  }
};