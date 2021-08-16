/// <reference types="cypress" />
import { initEnv, mount } from 'cypress-angular-unit-test';

import { AppComponent } from './app.component';
import { CalcPercentPipe } from './pipes/calc-percent.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OptionComponent } from './components/option/option.component';
import { ProgressComponent } from './components/progress/progress.component';
import { QuestionsService } from './services/questions.service';
import { RouterTestingModule } from '@angular/router/testing';
import { VertOMeterComponent } from './components/vert-o-meter/vert-o-meter.component';

beforeEach(() => {
  initEnv(AppComponent, {
    imports: [
      RouterTestingModule,
      FormsModule,
      HttpClientModule
    ],
    declarations: [
      OptionComponent,
      ProgressComponent,
      VertOMeterComponent,
      CalcPercentPipe
    ],
    providers: [QuestionsService]
  });
});
describe('AppComponent', () => {
  it('App component mount', () => {
    mount(AppComponent);
  });
});