/// <reference types="cypress" />
import { initEnv, mount } from 'cypress-angular-unit-test';

import { Answer } from './../../models/answer';
import { FormsModule } from '@angular/forms';
import { OptionComponent } from './option.component';

beforeEach(() => {
  initEnv(OptionComponent, { imports: [FormsModule] });
});
describe('OptionComponent', () => {
  const option: Answer = {
    text: 'lorem',
    value: 1,
  };

  it('option should be visible and contain label', () => {
    mount(OptionComponent, { option });
    cy.get('.option > .label').should('be.visible').contains(option.text);
  });

  it('option checkbox should be checked', () => {
    mount(OptionComponent, { option });
    cy.get('.option > input[type="checkbox"]').check().should('be.checked');
  });

  it('option checkbox should be unchecked', () => {
    mount(OptionComponent, { option });
    cy.get('.option > input[type="checkbox"]').check().uncheck({
      force: true
    }).should('not.be.checked');
  });
});