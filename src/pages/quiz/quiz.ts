import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { PointsProvider } from '../../providers/points/points';
import { PointsPage } from '../points/points';
import { Politics } from '../../app/model/politics/politic.model';

import { Geography } from '../../app/model/geography/geo.model';
import { Sciences } from '../../app/model/science/science.model';
import { Animals } from '../../app/model//animals/animal.model';
import { History } from '../../app/model/history/history.model';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
  @ViewChild('slides') slides: Slides;

restart: boolean = false;  
  
item: any;
quizAndAnswers: any []; 
currentQuestion: any = {};
questionIndex: number;
score: any = 0;
options : any = {"Politics":Politics, "Science":Sciences, "Animals": Animals, "History": History, "Geography": Geography};


name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pointsProvider: PointsProvider) {
    this.start();
  }
  
  start(){
    this.item = this.navParams.data;
    this.quizAndAnswers = this.options[this.item]; 
  }
 

  selectedOption(choice) {
    this.slides.preventClicks =  false;
    this.nextSlide();

   
  
      
    if(choice == true) {
       
      this.score = this.pointsProvider.ScorePoints(20);
        
        
        
      }else {
        console.log('wrong');
        
      }
  }
  viewScore() {
    
   
    this.navCtrl.push(PointsPage, {score: this.score, item: this.item});
   
     
    
   
}
  nextSlide() {
      this.slides.slideNext(1);
  }

  restartSlide(){
    this.score = this.pointsProvider.ScoreRestart();
    this.start();
    this.slides.slideTo(1, 1000);
  
  }

  ionViewDidLoad() {
    
    this.slides.lockSwipeToPrev(true);
   
   
   
  }




   
 

}
