import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage   {



  myntrull={
    twenty:null,
    ten:null,
    five:null,
    one:null,
  }
    constructor(public navCtrl: NavController, private api:ApiProvider) {

    }

    ionViewDidLoad(){
      this.myntrull = this.api.myntrull;
    }


    total(){
      let number = (this.myntrull.twenty * 20) + (this.myntrull.ten * 10) + (this.myntrull.five * 5) + (this.myntrull.one * 1) ;
    return number;
    }



    reset(){
      this.api.reset();
      this.myntrull={
        twenty:null,
        ten:null,
        five:null,
        one:null,
      }
    }




  }
