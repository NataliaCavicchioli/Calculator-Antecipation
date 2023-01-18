import axios from "axios";

const prod = "https://frontend-challenge-7bu3nxh76a-uc.a.run.app";
const dev = "http://localhost:3001";

export const api = axios.create({
  baseURL: prod,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
