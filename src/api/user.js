import Http from '../utils/Http';

const BASE_URL = '/users';

/**
 * Get UserInfo
 */
export function fetchUser() {
  return Http.get(`${BASE_URL}/me`);
}

