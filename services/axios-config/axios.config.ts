import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3210",
  timeout: 5000,
});

export { api };
