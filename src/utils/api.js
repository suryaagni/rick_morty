import axios from "axios";

export const fetchApi = (url, params) => {
    return axios.get(`${url}`, {
      params,
    });
  };
  
  export const postApi = (url, body, headers) => {
    return axios.post(`${url}`, body);
  };