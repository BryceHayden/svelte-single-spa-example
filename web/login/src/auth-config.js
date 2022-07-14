export const msalConfig = {
  auth: {
    clientId: "hey-get-your-own-id",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: "https://you-should-put-something-here",
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};
