import axios from 'axios';

const API_BASE_URL = 'http://35.179.153.50:8000';

export const fetchAllNews = async (page = 1) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};



