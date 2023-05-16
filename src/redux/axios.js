import React from "react";
import axios from "axios";

let url = "https://apinew.tracon.co.id/helios/public/api/v1";
export const http = axios.create({
  baseURL: url,
  withCredentials: false,
});
axios.defaults.headers.common["accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default http;
