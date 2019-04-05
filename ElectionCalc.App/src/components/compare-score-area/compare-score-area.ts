import { Component } from '@angular/core';

/**
 * Generated class for the CompareScoreAreaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'compare-score-area',
  templateUrl: 'compare-score-area.html'
})
export class CompareScoreAreaComponent {

  text: string;

  constructor() {
    console.log('Hello CompareScoreAreaComponent Component');
    this.text = 'Hello World';
  }

}
