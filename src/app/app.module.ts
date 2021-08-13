import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { CalcPercentPipe } from './pipes/calc-percent.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { OptionComponent } from './components/option/option.component';
import { ProgressComponent } from './components/progress/progress.component';
import { QuestionsService } from './services/questions.service';
import { VertOMeterComponent } from './components/vert-o-meter/vert-o-meter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    OptionComponent,
    CalcPercentPipe,
    VertOMeterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
