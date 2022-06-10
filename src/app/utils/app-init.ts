// import { KeycloakService } from 'keycloak-angular';
// import { from, switchMap } from 'rxjs';
// // import { environment } from '../../environments/environment';
// import { ConfigInitService } from './init/config-init.service';

import { KeycloakService } from "keycloak-angular";
import { environment } from "src/environments/environment";

// export function initializeKeycloak(
//   keycloak: KeycloakService,
//   configService: ConfigInitService
// ) {
//   return () =>
//     configService.getConfig()
//       .pipe(
//         switchMap<any, any>((config) => {

//           return from(keycloak.init({
//             config: {
//               url: config['KEYCLOAK_URL'] + '/auth',
//               realm: config['KEYCLOAK_REALM'],
//               clientId: config['KEYCLOAK_CLIENT_ID'],
//             },
//             initOptions: {
//               enableLogging: true,
//               onLoad: 'check-sso',
//               checkLoginIframe: false,
//               checkLoginIframeInterval: 25
//             },
//             loadUserProfileAtStartUp: true,
//             bearerExcludedUrls: ['/angular-bot', '/home']
//           }))

//         })
//       ).toPromise()
// }

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        "realm": environment.keycloak.realm,
        "url": environment.keycloak.issuer,
        "clientId": environment.keycloak.clientId,
      },
      initOptions: {
        enableLogging: true,
        onLoad: 'check-sso',
        checkLoginIframe: false,
        checkLoginIframeInterval: 25
      },
      loadUserProfileAtStartUp: true,
      bearerExcludedUrls: ['/angular-bot', '/home']
    });
}
