import { Component, Input } from '@angular/core';

import { Answer } from './../../models/answer';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  @Input() public option: Answer | undefined;
}
