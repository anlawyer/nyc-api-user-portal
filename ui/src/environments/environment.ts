// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiHost: 'http://localhost:8080',
  mapbox: {
    accessToken: 'pk.eyJ1IjoiYW5sYXd5ZXIiLCJhIjoiY2pnOXU5dHFpMWhwcjJxcWxseG91NDl5ZSJ9.lyKwIU3Uu_XrqQLcw-hE1g'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
