export const selectToken = state => state.auth.token;

export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const verificationEmailSent = state => state.auth.verificationEmailSent;

export const selectIsVerified = state => state.auth.isVerified;
