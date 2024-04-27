import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
  // https://crmtest6.kstore.shop/supplierbff/
  baseURL: 'https://xxx.xxx.xxx/supplierbff/', // API基础地址
  timeout: 5000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // 例如，如果有token，可以在这里统一设置
    // config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  },
  error => {
    // 对请求错误做些什么
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    const res = response.data;
    // todo你可以根据自己项目的需要来定制响应代码的处理逻辑
    if (res.code !== 'K000000') {
      // 处理错误响应
      console.error('Error Response:', res);
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      // 返回响应的数据部分
      return res;
    }
  },
  error => {
    // 对响应错误做点什么
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);

// GET 请求封装
export const get = async (url, params) => {
  try {
    const response = await service.get(url, { params });
    return response;
  } catch (error) {
    console.error('GET Request Failed:', error);
    throw error;
  }
};

// POST 请求封装
export const post = async (url, data) => {
  try {
    const response = await service.post(url, data);
    return response;
  } catch (error) {
    console.error('POST Request Failed:', error);
    throw error;
  }
};

// 更多请求方法可以在这里继续封装...
