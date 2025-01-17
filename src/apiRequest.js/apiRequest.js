





import axios from "axios";
import { retrieveUserDetails } from "../middleware/localstorageconfig";



const getHeaders = () => {
  const adminauthCookie = retrieveUserDetails("authDetails");
  if(adminauthCookie){
    return {
      token:adminauthCookie?.token ,
      usernameToken:adminauthCookie?.usernameToken,
      // "Content-Type": "application/json", // Ensure the correct content type for JSON data
    };
  }
  
  };
const API_BASE_URL = import.meta.env.VITE_API_URL;

export const sendPostRequest = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, data, {
      headers: getHeaders(), // Pass headers correctly
    });

    return response.data; // Axios automatically parses JSON responses
  } catch (error) {
    console.error("Error creating data:", error);
    throw error; // Re-throw the error or handle as needed
  }
};

export const fetchGetRequest = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
      headers: getHeaders(), // Pass headers correctly
    });

    return response.data; // Axios automatically parses JSON responses
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error or handle as needed
  }
};

export const sendPatchRequest = async (endpoint, data) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}${endpoint}`, data, {
      headers: getHeaders(), // Pass headers correctly
    });

    return response.data; // Axios automatically parses JSON responses
  } catch (error) {
    console.error("Error updating data:", error);
    throw error; // Re-throw the error or handle as needed
  }
};



export const deleteData = async (endpoint) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}${endpoint}`, {
      headers: getHeaders(), // Pass headers correctly
    });

    return response.data; // Axios automatically parses JSON responses
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error; // Re-throw the error or handle as needed
  }
};

