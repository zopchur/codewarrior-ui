export const environment = {
  production: false,
  envName: 'local',
  api_baseUrl: {
    baseUrl: 'http://localhost:8011/'
    // baseUrl: 'https://apisg.tdisa.ew1.msi-dev.acloud.gemalto.com/v1/'
  },
  // keycloak: {
  //   issuer: 'http://localhost:8090/auth/',
  //   realm: 'Nandram',
  //   clientId: 'webapp',
  // },
  keycloak: {
    issuer: 'http://localhost:8180/auth/',
    realm: 'Saas-Admin',
    clientId: 'webapp',
  },

  // Your web app's Firebase configuration
  firebaseConfig: {
    apiKey: "AIzaSyCjK-gqk0nvNV4yvYhUOgTkfeizKS0gsi0",
    authDomain: "mobile-authentication-876c4.firebaseapp.com",
    projectId: "mobile-authentication-876c4",
    storageBucket: "mobile-authentication-876c4.appspot.com",
    messagingSenderId: "381891933488",
    appId: "1:381891933488:web:730dfd45d6b9d3d83a04f5"
  },
  configFile: 'assets/config/config.dev.json'
};
