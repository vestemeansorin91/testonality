import { initEnv, mount } from 'cypress-angular-unit-test';

/// <reference types="cypress" />
import { FormsModule } from '@angular/forms';
import { OptionComponent } from './option.component';

beforeEach(() => {
  initEnv(OptionComponent, { imports: [FormsModule,] });
});
describe('OptionComponent', () => {
  it('should show default value input', () => {
    initEnv(OptionComponent);
    mount(OptionComponent);
  });
});