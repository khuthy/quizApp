import { Component } from '@angular/core';
import { IonicPage, NavController  } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import { PointsProvider } from '../../providers/points/points';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public pointsProvider: PointsProvider) {
    if(this.pointsProvider.getScore() > 0){
        this.pointsProvider.ScoreRestart();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


  getStarted() {
    this.navCtrl.push(CategoriesPage);
  }
}
