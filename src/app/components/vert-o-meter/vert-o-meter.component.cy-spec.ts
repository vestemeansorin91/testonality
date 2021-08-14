/// <reference types="cypress" />
import { initEnv, mount } from 'cypress-angular-unit-test';

import { CalcPercentPipe } from './../../pipes/calc-percent.pipe';
import { VertOMeterComponent } from './vert-o-meter.component';

beforeEach(() => {
  initEnv(VertOMeterComponent, { imports: [] , declarations: [CalcPercentPipe]});
});
describe('VertOMeterComponent', () => {
  it('component mount', () => {
    mount(VertOMeterComponent);
    cy.contains('introvert');
  });
});