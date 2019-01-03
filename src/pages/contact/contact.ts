import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage   {
myntrullcount=this.api.myntrulltotal;


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
      this.myntrullcount=this.api.myntrulltotal;
    }


    total(){
      let number = (this.myntrull.twenty * 20) + (this.myntrull.ten * 10) + (this.myntrull.five * 5) + (this.myntrull.one * 1) ;
      this.myntrullcount=number;
      // localStorage.setItem('myntrullcount',this.myntrullcount);
    return this.myntrullcount
    }



    reset(){
      this.api.resetMyntrull();
      this.myntrull={
        twenty:null,
        ten:null,
        five:null,
        one:null,
      }
      localStorage.removeItem('myntrullcount');
      this.myntrullcount=this.api.myntrulltotal;
    }




  }
