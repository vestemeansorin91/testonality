/// <reference types="cypress" />
import { initEnv, mount } from 'cypress-angular-unit-test';

import { CalcPercentPipe } from './../../pipes/calc-percent.pipe';
import { ProgressComponent } from './progress.component';

beforeEach(() => {
  initEnv(ProgressComponent, { declarations: [CalcPercentPipe] });
});
describe('ProgressComponent', () => {
  const currentIndex = 0;
  const total = 5;

  const calcPercentPipe = new CalcPercentPipe().transform(currentIndex + 1, total);

  it('Progress should have correct percentage', () => {
    mount(ProgressComponent, { currentIndex, total });
    cy.get('[data-cy="total-progress"]').should('contain.text', calcPercentPipe);
  });
});