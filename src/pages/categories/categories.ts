import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';


/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

 


  items: any = ['Politics', 'History', 'Animals', 'Science', 'Geography'];


  constructor(public navCtrl: NavController, public navParams: NavParams) {


 
  }

  ionViewDidLoad() {
 
    console.log('ionViewDidLoad CategoriesPage');
  }

  itemSelected(item: string) {
    this.navCtrl.push(QuizPage, item);}

}
