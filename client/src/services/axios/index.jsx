import axios from "axios";

const BASE_URL = "http://localhost:8000";
// Add deploying backend url here

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	header: { "Content-type": "application/json" },
});

export default axiosInstance;
