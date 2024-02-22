import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
//  baseURL: "http://127.0.0.1:5001/clone-f1af7/us-central1/api",
  
  // deployed version of amazon server on render.com
  baseURL: "https://amazon-api-backend-deploy-pt7p.onrender.com",
});

export { axiosInstance };