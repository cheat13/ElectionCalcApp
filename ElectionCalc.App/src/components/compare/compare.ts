import { Component } from '@angular/core';
import { CloudSyncProvider } from '../../providers/cloud-sync/cloud-sync';
import { CompareScore } from '../../app/models';

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

  public type: string;
  public batch1st: string;
  public batch2nd: string;
  public compareScore: CompareScore[] = [];
  public compareScoreParty: CompareScore[] = [];
  public compareScorePartyRatio: CompareScore[] = [];

  constructor(private cloudSync: CloudSyncProvider) {
    console.log('Hello CompareComponent Component');
    this.type = 'score';
    this.batch1st = "1";
    this.batch2nd = "2";
  }

  ngOnInit() {
    this.loadCompareScoreParty();
    this.loadCompareScorePartyRatio();
  }

  loadCompareScoreParty() {
    this.cloudSync.loadCompareScoreParty(this.batch1st, this.batch2nd)
      .subscribe(data => {
        this.compareScoreParty = data;
        this.setData();
      });
  }

  loadCompareScorePartyRatio() {
    this.cloudSync.loadCompareScorePartyRatio(this.batch1st, this.batch2nd)
      .subscribe(data => {
        this.compareScorePartyRatio = data;
        this.setData();
      })
  }

  setData() {
    this.compareScore = (this.type == 'score') ? this.compareScoreParty : this.compareScorePartyRatio;
  }

  error(diff: number): boolean {
    return diff < 0;
  }

}
