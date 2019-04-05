import { Component } from '@angular/core';
import { CloudSyncProvider } from '../../providers/cloud-sync/cloud-sync';
import { ShowScoreArea } from '../../app/models';

/**
 * Generated class for the HomeScoreAreaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-score-area',
  templateUrl: 'home-score-area.html'
})
export class HomeScoreAreaComponent {

  text: string;
  public showScoreArea: ShowScoreArea[] = [];
  public scoreArea: ShowScoreArea[] = [];

  constructor(private cloudSync: CloudSyncProvider) {
    console.log('Hello HomeScoreAreaComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    this.cloudSync.loadShowScoreArea().subscribe(data => {
      this.showScoreArea = data;
    });
  }



}
