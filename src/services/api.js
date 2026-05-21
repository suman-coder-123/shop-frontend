import axios from "axios";

const API = axios.create({
  baseURL: "https://shop-backend-sp55.onrender.com/api",
});

export default API;