import { Component } from '@angular/core';

/**
 * Generated class for the DistributionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'distribution',
  templateUrl: 'distribution.html'
})
export class DistributionComponent {

  text: string;

  constructor() {
    console.log('Hello DistributionComponent Component');
    this.text = 'Hello World';
  }

}
