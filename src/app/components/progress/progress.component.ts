import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  @Input() public total = 0;
  private _currentIndex: number = 0;

  get currentIndex(): number {
    return this._currentIndex;
  }
  
  @Input() set currentIndex(value: number) {
    this._currentIndex = value + 1;
  }

}
