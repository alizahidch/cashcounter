import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the SumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sum',
  templateUrl: 'sum.html',
})
export class SumPage {
  go(){
    this.navCtrl.push('ProfilePage');
  }

  sedler={
    thousand:null,
    five:null,
    two:null,
    hundred:null,
    fifty:null
  }
    constructor(public navCtrl: NavController, private api:ApiProvider) {

    }

  mynt={
    twenty:null,
    ten:null,
    five:null,
    one:null,
  }
  myntrull={
    twenty:null,
    ten:null,
    five:null,
    one:null,
  }



    ionViewDidEnter(){
      this.sedler = this.api.sedler;
      this.mynt =this.api.mynt;
      this.myntrull = this.api.myntrull;
    }


    total(){
      let sedler = (this.sedler.thousand * 1000) + (this.sedler.five * 500) + (this.sedler.two * 200) + (this.sedler.hundred * 100) + (this.sedler.fifty * 50);
      let mynt = (this.mynt.twenty * 20) + (this.mynt.ten * 10) + (this.mynt.five * 5) + (this.mynt.one * 1) ;
      let myntrull = (this.myntrull.twenty * 20) + (this.myntrull.ten * 10) + (this.myntrull.five * 5) + (this.myntrull.one * 1) ;
      return sedler + mynt + myntrull;
    }


    reset(){
      this.api.reset();
    }

    goSave(){
      this.navCtrl.push('SavePage');
    }




  }
