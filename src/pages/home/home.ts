import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



sedler={
  thousand:null,
  five:null,
  two:null,
  hundred:null,
  fifty:null
}
  constructor(public navCtrl: NavController, private api:ApiProvider) {

  }

  ionViewDidLoad(){
    this.sedler = this.api.sedler;
  }


  total(){
    let number = (this.sedler.thousand * 1000) + (this.sedler.five * 500) + (this.sedler.two * 200) + (this.sedler.hundred * 100) + (this.sedler.fifty * 50);
  return number;
  }




  reset(){
    this.api.reset();
    this.sedler ={
      thousand:null,
      five:null,
      two:null,
      hundred:null,
      fifty:null
    }
  }


}
