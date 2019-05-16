import {editUser} from "../../api/user";

/**
 * Update User
 * @param payload
 * @param dispatch
 * @return {Promise<void>}
 */
const updateUser = async (payload, dispatch) => {
  const data = await editUser(payload)
  dispatch({type: 'USER_FETCH', data});
}

export {
  updateUser,
}
