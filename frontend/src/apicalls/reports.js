import axiosInstance from ".";

export const addReport = async (payload) => {
  try {
    const response = await axiosInstance.post('/api/reports/addReport', payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllAttempts = async () => {  // Changed to GET if no payload is required for fetching data
  try {
    const response = await axiosInstance.get('/api/reports/getAllAttempts');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllAttemptsByUser = async () => {
  try {
    const response = await axiosInstance.get('/api/reports/getAllAttemptsByUser');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
