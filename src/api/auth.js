import Http from '../utils/Http';

const BASE_URL = '/auth';

/**
 * Get UserInfo
 */
export function fetchToken(payload) {
  return Http.post(`${BASE_URL}/signin`, payload);
}

