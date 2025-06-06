import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {KeycloakService} from './app/services/keycloak.service';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

const keycloakService = new KeycloakService();


keycloakService.init()
.catch(err => console.error('[Keycloak] Init failed', err));
