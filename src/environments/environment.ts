// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  fbLogInWithEmailUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDeaDGgw9xQXea1NYs0sPm2S9nAGCg758w',
  fbSignUpWithEmailUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDeaDGgw9xQXea1NYs0sPm2S9nAGCg758w',
  fireBaseDbUrl: 'https://dkorolev-ng-cource-project.firebaseio.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
