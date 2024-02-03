import axios from "axios";

const baseURL = "https://reqres.in/api";
const https= axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleError = (error, customErrorMessage) => {
  if (error.response) {
    // The request was made, but the server responded with a status code
    console.error(customErrorMessage || "Server Error:", error.response.data);
  } else if (error.request) {
    // The request was made, but no response was received
    console.error(customErrorMessage || "No response from the server");
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error(customErrorMessage || "Error:", error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await https.post('/login', { email, password });
    console.log("Login successful:", response.data);
    return response.data;
  } catch (error) {
    handleError(error, "Error during login");
    throw error;
  }
};

export const signupUser = async (email, password) => {
  try {
    const response = await https.post('/users', { email, password });
    console.log("Signup successful:", response.data);
    return response.data;
  } catch (error) {
    handleError(error, "Error during signup");
    throw error;
  }
};
