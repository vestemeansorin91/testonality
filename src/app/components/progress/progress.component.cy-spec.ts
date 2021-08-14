/// <reference types="cypress" />
import { initEnv, mount } from 'cypress-angular-unit-test';

import { CalcPercentPipe } from './../../pipes/calc-percent.pipe';
import { ProgressComponent } from './progress.component';

beforeEach(() => {
  initEnv(ProgressComponent, { imports: [], declarations: [CalcPercentPipe] });
});
describe('ProgressComponent', () => {
  it('component mount', () => {
    mount(ProgressComponent, {currentIndex: 0});
    cy.contains(0);
  });
});