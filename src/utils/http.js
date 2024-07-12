// axios基础封装
import { ElMessage } from 'element-plus';
import 'element-plus/theme-chalk/el-message.css'
import axios from "axios";

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:10000
})

// 拦截器

// axios请求拦截器
httpInstance.interceptors.request.use(
    config => {
      return config;
    }, e =>Promise.reject(e));

  // axios响应拦截器
  httpInstance.interceptors.response.use(
   res => res.data,e => {
    // 统一错误提示
    ElMessage({
      type: 'warning',
      message: e.response.data.message
    })
    return Promise.reject(e)
   }
);

export default httpInstance