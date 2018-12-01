import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage  {



  mynt={
    twenty:null,
    ten:null,
    five:null,
    one:null,
  }
    constructor(public navCtrl: NavController, private api:ApiProvider) {

    }

    ionViewDidLoad(){
      this.mynt = this.api.mynt;
    }


    total(){
      let number = (this.mynt.twenty * 20) + (this.mynt.ten * 10) + (this.mynt.five * 5) + (this.mynt.one * 1) ;
    return number;
    }



    reset(){
      this.api.reset();
      this.mynt={
        twenty:null,
        ten:null,
        five:null,
        one:null,
      }
    }



  }
