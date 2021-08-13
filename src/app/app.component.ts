import { Component, OnInit } from '@angular/core';

import { Question } from './models/question';
import { QuestionsService } from './services/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currentIndex = 0;
  public questions: Question[] = [];
  public score = 0;

  constructor(private service: QuestionsService) { }

  get lastStep(): boolean {
    return this.currentIndex === this.questions.length - 1;
  }

  get isBackDisabled(): boolean | null {
    return this.currentIndex === 0 ? true : null;
  }

  ngOnInit() {
    this.service.getQuestions().subscribe((response: Question[]) => {
      this.questions = response;
    })
  }

  public isSectionValid(): boolean | null {
    return !this.questions[this.currentIndex].options.some(option => option && option.isChecked) || null;
  }

  // NAVIGATION
  public retakeTestClicked(): void {
    this.currentIndex = 0;
    this.resetChecks();
  }

  public backClicked(): void {
    this.currentIndex = this.currentIndex - 1;
  }

  public nextClicked(): void {
    this.currentIndex = this.currentIndex + 1;
  }

  public finishClicked(): void {
    this.currentIndex = this.currentIndex + 1;
    this.score = this.calculateVertOMeter();
  }

  private resetChecks(): void {
    this.questions = this.questions.map(question => {
      return {
        ...question,
        options: question.options.map(option => {
          return {
            ...option,
            isChecked: null
          }
        })
      }
    });
  }

  private calculateVertOMeter() {
    return (this.questions || []).map(item => item.options.filter(option => option && option.isChecked))
      .reduce((acc, val) => acc.concat(val))
      .map(answer => answer.value)
      .reduce((acc, val) => acc + val);
  }
}
