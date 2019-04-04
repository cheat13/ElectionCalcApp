import { Component } from '@angular/core';

/**
 * Generated class for the CompareComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'compare',
  templateUrl: 'compare.html'
})
export class CompareComponent {

  text: string;

  constructor() {
    console.log('Hello CompareComponent Component');
    this.text = 'Hello World';
  }

}
