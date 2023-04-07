import axios from "axios";
import {ElMessage} from 'element-plus';

const service = axios.create({
  timeout: 30000
})

service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token && config && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config;
  },
  (error) => {
    // @ts-ignore
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    ElMessage.error(error)
    // @ts-ignore
    return Promise.reject(error)
  }
)

export default service;