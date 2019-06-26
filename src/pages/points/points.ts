import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Slide } from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';
import { HomePage } from '../home/home';
import { PointsProvider } from '../../providers/points/points';

/**
 * Generated class for the PointsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-points',
  templateUrl: 'points.html',
})
export class PointsPage {
  @ViewChild('slides') slides: Slides;
  restart: boolean = false;

  score: number;
  item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public pointsProvider: PointsProvider) {
      this.score = this.pointsProvider.getScore();
      this.item = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PointsPage');
  }

  tryAgain() {
    this.score = this.pointsProvider.ScoreRestart();
    
    this.restart = true;
    this.navCtrl.push(QuizPage, this.item);
    
  }
  homePage(){
    this.score = this.pointsProvider.ScoreRestart();;
    this.navCtrl.push(HomePage);
  }

}
