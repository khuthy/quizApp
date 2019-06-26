import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PointsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PointsProvider {
  grandTotal: number = 0;
  getData: any;
  constructor(public http: HttpClient) {
    console.log('Hello PointsProvider Provider');
  }
  

  ScorePoints(val) {
      this.grandTotal += val;
  }
  getData(){
  }
  getScore(){
    return this.grandTotal;
  }
  ScoreRestart(){
    return this.grandTotal = 0;
  }




}
