/// <reference types="cypress" />
import { initEnv, mount } from 'cypress-angular-unit-test';

import { AppComponent } from './app.component';
// This 👇 is a dependency needed for router-outlet located in our app.component.html
import { RouterTestingModule } from '@angular/router/testing';
beforeEach(() => {
  // Init Angular stuff
  initEnv(AppComponent, { imports: [ RouterTestingModule ] });
});
describe('AppComponent', () => {
  it('Test welcome message', () => {
    const welcomeMessage = 'blog-angular-cypress-example';
    // component + any inputs object
    mount(AppComponent, {title: welcomeMessage});
    // use any Cypress command afterwards
    cy.contains(`${welcomeMessage} app is running!`);
  });
});