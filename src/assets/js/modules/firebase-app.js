// One Firebase app per page. The web config is public by design; access is limited by
// firestore.rules, Auth settings, App Check and the API key's HTTP referrer restriction.
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";

let app;

export function getFirebaseApp(config) {
  if (app) return app;
  app = initializeApp({
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    appId: config.appId,
  });
  if (config.appCheckSiteKey) {
    initializeAppCheck(app, {
      provider: new ReCaptchaEnterpriseProvider(config.appCheckSiteKey),
      isTokenAutoRefreshEnabled: true,
    });
  }
  return app;
}
