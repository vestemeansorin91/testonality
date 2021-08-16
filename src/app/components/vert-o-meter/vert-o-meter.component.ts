import { Component, Input } from '@angular/core';

export enum Meter {
  LOW = 5,
  MEDIUM = 10,
  HIGH = 15
}

// Could be more dynamic, done with a formula, but for the current app logic
// the maximum / minimum points that you can get is
// either -19 or 19 points, 0 is in the middle
export const MAX_VALUE = 38;

@Component({
  selector: 'app-vert-o-meter',
  templateUrl: './vert-o-meter.component.html',
  styleUrls: ['./vert-o-meter.component.scss']
})
export class VertOMeterComponent {
  public blocks: boolean[] = new Array(6).fill(false);
  public MAX_VALUE = MAX_VALUE;
  @Input() public value: number = 0;
}
