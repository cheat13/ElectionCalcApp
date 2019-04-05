import { CloudSyncProvider } from './../../providers/cloud-sync/cloud-sync';
import { Component } from '@angular/core';
import { ScoreParty, ShowScore } from '../../app/models';

/**
 * Generated class for the HomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {

  public type: string;
  public showScore: ShowScore[] = [];
  public showScoreParty: ShowScore[] = [];
  public showScorePartyRatio: ShowScore[] = [];

  constructor(private cloudSync: CloudSyncProvider) {
    console.log('Hello HomeComponent Component');
    this.type = 'score';
  }

  ngOnInit() {
    this.cloudSync.loadShowScoreParty()
      .subscribe(data => {
        this.showScoreParty = data;
        this.setData();
      });

    this.cloudSync.loadShowScorePartyRatio()
      .subscribe(data => {
        this.showScorePartyRatio = data;
      })
  }

  setData() {
    this.showScore = (this.type == 'score') ? this.showScoreParty : this.showScorePartyRatio;
  }

}
