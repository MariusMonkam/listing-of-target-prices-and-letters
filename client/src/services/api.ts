import axios from "axios";

const baseURL = "http://localhost:5000"; // Replace with your backend API URL

const api = axios.create({
  baseURL,
});

export const fetchTargetPrices = async () => {
  try {
    const response = await api.get("/api/target-prices");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch target prices");
  }
};
