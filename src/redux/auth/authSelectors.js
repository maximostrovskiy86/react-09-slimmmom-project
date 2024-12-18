export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserData = state => state.auth.user.username;
export const getUserSid = state => state.auth.sid;
export const getAccessToken = state => state.auth.accessToken;