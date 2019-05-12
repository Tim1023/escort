import {fetchToken} from "../api/auth";
import HTTP from '../utils/Http';
import {fetchUser} from "../api/user";

const login = async (payload,dispatch) => {
  const {tokenType, accessToken} = await fetchToken(payload);
  const tokenHeader = tokenType + accessToken;
  localStorage.setItem('access_token', tokenHeader);
  HTTP.defaults.headers.common['Authorization'] = tokenHeader;
  const data = await fetchUser();
  console.log(data);
};

export {
  login,
}
