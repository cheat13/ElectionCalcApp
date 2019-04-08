import { Component } from '@angular/core';
import { CloudSyncProvider } from '../../providers/cloud-sync/cloud-sync';
import { CompareScoreArea } from '../../app/models';
import { PopoverController } from 'ionic-angular';
import { SortPopoverComponent } from '../sort-popover/sort-popover';

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

  public listShowCompareScore: CompareScoreArea[] = [];
  public listCompareScore: CompareScoreArea[] = [];
  public batch1st: string;
  public batch2nd: string;
  public totalScore: CompareScoreArea = new CompareScoreArea;

  constructor(private cloudSync: CloudSyncProvider, public popoverCtrl: PopoverController) {
    console.log('Hello CompareScoreAreaComponent Component');
    this.batch1st = "1";
    this.batch2nd = "2";
  }

  ngOnInit() {
    this.cloudSync.loadCompareScoreArea(this.batch1st, this.batch2nd).subscribe(data => {
      this.listCompareScore = data;
      this.listShowCompareScore = this.listCompareScore;
      this.setData();
      console.log(this.listShowCompareScore);

    });
  }

  setData() {
    if (this.listCompareScore.length > 0) {
      this.totalScore.province = "คะแนนรวม"
      this.totalScore.scoreBatch1st = this.listCompareScore.map(it => it.scoreBatch1st).reduce((a, b) => a + b);
      this.totalScore.scoreBatch2nd = this.listCompareScore.map(it => it.scoreBatch2nd).reduce((a, b) => a + b);
      this.totalScore.diff = this.listCompareScore.map(it => it.diff).reduce((a, b) => a + b);
      this.totalScore.percentDiff = (this.totalScore.scoreBatch2nd - this.totalScore.scoreBatch1st) / this.totalScore.scoreBatch1st * 100;
    }
  }

  presentPopover(item: string) {
    let popover = this.popoverCtrl.create(SortPopoverComponent, { isCompare: true });
    popover.present({
      ev: event
    });
    popover.onDidDismiss(data => {
      switch (data) {
        case 1:
          this.listShowCompareScore = (item == 'diff') ? this.listCompareScore.sort((a, b) => a.diff - b.diff)
            : this.listCompareScore.sort((a, b) => a.percentDiff - b.percentDiff);
          break;
        case 2:
          this.listShowCompareScore = (item == 'diff') ? this.listCompareScore.sort((a, b) => b.diff - a.diff)
            : this.listCompareScore.sort((a, b) => b.percentDiff - a.percentDiff);
          break;
        case 3:
          this.listShowCompareScore = this.listCompareScore.filter(it => it.diff < 0);
          this.setData();
          break;
        case 4:
          this.listShowCompareScore = this.listCompareScore.filter(it => it.diff > 0);
          this.setData();
          break;
        case 5:
          this.listShowCompareScore = this.listCompareScore;
          this.setData();
          break;
        default:
          break;
      }
    });
  }



}
