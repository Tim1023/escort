/* eslint-disable no-console */
import axios from 'axios'
import {Store} from '../store'
import React from "react";
import {logoutAction} from "../store/Action";



// const version = 'v1'
const API_URL = '/api/';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.response.use(
  response => response.data,
  (error) => {
    if (error.response.status === 401) {
      const runLogout = ()=>{
        const { dispatch } = React.useContext(Store);
        logoutAction(dispatch);
      }
      runLogout();
    }
    return Promise.reject(error);
  });


export default axios
