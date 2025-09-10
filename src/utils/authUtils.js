// src/utils/authUtils.js
import axios from "axios";

const API_URL = "http://localhost:62708/api";

export const register = async (username, password) => {
  try {
    const res = await axios.post(`${API_URL}/register`, { username, password });
    return { success: true, message: res.data.message };
  } catch (err) {
    return { success: false, message: err.response?.data?.error || "Registration failed" };
  }
};

export const login = async (username, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { username, password });
    // Save JWT token to localStorage
    localStorage.setItem("token", res.data.token);
    return { success: true };
  } catch (err) {
    return { success: false, message: err.response?.data?.error || "Login failed" };
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};