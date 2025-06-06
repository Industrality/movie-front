import { Injectable } from '@angular/core';
import Keycloak, { KeycloakInstance } from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  private keycloak: KeycloakInstance;

  constructor() {
    this.keycloak = new Keycloak({
      url: 'http://localhost:8888/',      // 🔁 Replace with your Keycloak server
      realm: 'movie',               // 🔁 Replace with your realm
      clientId: 'movie',        // 🔁 Replace with your client ID
    });
  }

  init(): Promise<boolean> {
    return this.keycloak.init({
      onLoad: 'login-required',
      checkLoginIframe: false,
    }).then(authenticated => {
      console.log('[Keycloak] Authenticated', authenticated);
      return authenticated;
    });
  }

  getToken(): string | undefined {
    return this.keycloak.token;
  }

  logout(): void {
    this.keycloak.logout();
  }

  getUsername(): string | undefined {
    return this.keycloak.tokenParsed?.['preferred_username'];
  }
}
