/* eslint-disable no-console */
import axios from 'axios'
import {Store} from '../store'
// import { authLogout } from '../modules/auth/store/actions'

// const version = 'v1'
const API_URL = '/api/';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.response.use(
  response => response.data,
  (error) => {
    if (error.response.status === 401) {
      console.log('401')
      // store.dispatch(authLogout())
    }
    return Promise.reject(error);
  });

console.log(axios.defaults)

export default axios
