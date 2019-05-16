import HTTP from '../utils/Http';

const loginAction = (payload,dispatch) => {
  localStorage.setItem('access_token', payload);
  HTTP.defaults.headers.common['Authorization'] = payload;
  return dispatch({
    type: "AUTH_LOGIN",
  });
};
const logoutAction = (dispatch) => {
  localStorage.removeItem('access_token');
  delete HTTP.defaults.headers.common['Authorization'];
  return dispatch({
    type: "AUTH_LOGOUT",
  });
};
const authCheckAction = (dispatch) => {
  const isAuthenticated = !!localStorage.getItem('access_token');
  if (isAuthenticated) {
    HTTP.defaults.headers.common['Authorization'] = `${localStorage.getItem('access_token')}`;
  }
  return dispatch({
    type: "AUTH_CHECK",
    payload: isAuthenticated,
  });
};

const fetchUserAction = (payload, dispatch,) => {
  return dispatch({
    type: "USER_FETCH",
    payload: payload,
  });
}

export {
  loginAction,
  fetchUserAction,
  authCheckAction,
  logoutAction,
}
