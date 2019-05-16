import Http from '../utils/Http';

const BASE_URL = '/auth';

/**
 * SignIn
 */
export function fetchToken(payload) {
  return Http.post(`${BASE_URL}/signin`, payload);
}

/***
 * SignUp
 *
 * @param payload
 * @return {AxiosPromise<any>}
 */

export function signUp(payload) {
  return Http.post(`${BASE_URL}/signup`, payload);
}

