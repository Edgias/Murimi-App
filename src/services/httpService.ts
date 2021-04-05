import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
//   "jwt"
// )}`;

axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;

  if (expectedError) {
    //console.log("Logging the error.", error.response.status, error);
  }
  if (error.response && error.response.status === 401) {
    window.location.href = "/login";
  }

  return Promise.reject(error);
});

// function setToken(token: string) {
//   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// }

// const get = axios.get;
// const patch = axios.patch;
// const post = axios.post;
// const put = axios.put;
// const delet = axios.delete;

// export default {
//   get: get,
//   patch: patch,
//   post: post,
//   put: put,
//   delete: delet,
//   setToken,
// };
