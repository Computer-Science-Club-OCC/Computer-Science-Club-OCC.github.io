import axios from "axios"

const BASE_URL = "http://localhost:8000"
// Add deploying backend url here

const instance = axios.create({
  baseURL: BASE_URL
})



export default instance;