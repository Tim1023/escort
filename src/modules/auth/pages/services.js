import {fetchUser} from "../../../api/user";
import {login, updateUser} from "../../../store/Action";
import {fetchToken} from "../../../api/auth";

const getToken = async(payload, dispatch)=>{
  const {tokenType, accessToken} = await fetchToken(payload);
  const tokenHeader = tokenType + accessToken;
  login(tokenHeader, dispatch);
};
const getUser = async(dispatch)=>{
  const data = await fetchUser();
  updateUser(data,dispatch)
}

export {
  getToken,
  getUser,
}
