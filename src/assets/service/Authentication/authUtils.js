import { UserAgentApplication } from "msal";

export const requiresInteraction = (errorMessage) => {
  if (!errorMessage || !errorMessage.length) {
    return false;
  }

  return (
    errorMessage.indexOf("consent_required") > -1 ||
    errorMessage.indexOf("interaction_required") > -1 ||
    errorMessage.indexOf("login_required") > -1
  );
};


export const isIE = () => {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf("MSIE ") > -1;
  const msie11 = ua.indexOf("Trident/") > -1;

  return msie || msie11;
};

export const AUTH_SCOPES = {
  OPENID: "openid",
  OFFLINE_ACCESS: "offline_access",
  PROFILE: "profile",
};

export const AUTH_REQUESTS = {
  LOGIN: {
    scopes: [AUTH_SCOPES.OPENID, AUTH_SCOPES.PROFILE],
  },
  EMAIL: {
    scopes: [],
  },
  REFRESH_TOKEN: {
    scopes: [process.env.REACT_APP_CLIENT_ID],
  },
};

export const msalApp = new UserAgentApplication({
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID,
    authority: process.env.REACT_APP_AUTHORITY,
    validateAuthority: process.env.REACT_APP_VALIDATE_AUTHORITY === "true",
    redirectUri: process.env.REACT_APP_REDIRECT_URI,
    postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI,
    navigateToLoginRequestUrl:
      process.env.REACT_APP_NAVIGATE_TO_LOGIN_REQUEST_URL === "true",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: isIE(),
  },
  system: {
    navigateFrameWait: 0,
  },
});
