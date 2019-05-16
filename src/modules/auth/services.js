import {fetchUser} from "../../api/user";
import {loginAction, fetchUserAction} from "../../store/Action";
import {fetchToken} from "../../api/auth";

const getToken = async(payload, dispatch)=>{
  const {tokenType, accessToken} = await fetchToken(payload);
  const tokenHeader = tokenType + accessToken;
  loginAction(tokenHeader, dispatch);
};
const getUser = async(dispatch)=>{
  const data = await fetchUser();
  fetchUserAction(data,dispatch)
}

export {
  getToken,
  getUser,
}
