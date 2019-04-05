import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScoreAreaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score-area',
  templateUrl: 'score-area.html',
})
export class ScoreAreaPage {

  public features: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.features = 'home';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreAreaPage');
  }

}
