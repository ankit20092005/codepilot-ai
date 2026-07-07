import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCodeReview = async (code) => {
  const { data } = await api.post("/ai/get-review", { code });

  console.log("Backend Response:", data);
  console.log("typeof response =", typeof data.response);

  return data.response;
};

export default api;