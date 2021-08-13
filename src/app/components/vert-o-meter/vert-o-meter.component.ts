import { Component, Input } from '@angular/core';

export enum Meter {
  LOW = 5,
  MEDIUM = 10,
  HIGH = 15
}

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
