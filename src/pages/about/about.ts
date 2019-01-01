import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage  {

myntcount=this.api.mynttotal

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
      this.myntcount=this.api.mynttotal;
    }


    total(){
      let number = (this.mynt.twenty * 20) + (this.mynt.ten * 10) + (this.mynt.five * 5) + (this.mynt.one * 1) ;
      this.api.mynttotal=number;
      // localStorage.setItem('myntcount',this.myntcount);
    return this.api.mynttotal;
    }



    reset(){
      this.api.resetMynt();
      this.mynt={
        twenty:null,
        ten:null,
        five:null,
        one:null,
      }
      localStorage.removeItem('myntcount');
      this.myntcount=this.api.mynttotal
    }



  }
