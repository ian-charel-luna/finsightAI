// src/utils/simUtils.js
import api from "./api";

export const createSim = async (simData) => {
  try {
    const res = await api.post("/new-sim", simData);
    return res.data;
  } catch (err) {
    throw err.response?.data?.error || "Failed to create simulation";
  }
};

export const getAllSims = async () => {
  try {
    const res = await api.get("/get-all-sims");
    return res.data;
  } catch (err) {
    throw err.response?.data?.error || "Failed to fetch simulations";
  }
};