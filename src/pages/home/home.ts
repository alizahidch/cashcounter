import { Component } from '@angular/core';
import { NavController, Keyboard } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


scount=this.api.seldertotal;
sedler={
  thousand:null,
  five:null,
  two:null,
  hundred:null,
  fifty:null
}
  platform: any;
  
 

  constructor(public navCtrl: NavController, private api:ApiProvider) {

  }

  ionViewDidLoad(){
    this.sedler = this.api.sedler;
  this.scount=this.api.seldertotal;
  console.log(this.scount)
    this.total();
  }
  

    total(){
    let number = (this.sedler.thousand * 1000) + (this.sedler.five * 500) + (this.sedler.two * 200) + (this.sedler.hundred * 100) + (this.sedler.fifty * 50);
    this.api.seldertotal=number;
    // localStorage.setItem('scount',this.scount);
   return this.api.seldertotal
 
  }




   async reset(){
    this.api.resetSedler();
    this.sedler ={
      thousand:null,
      five:null,
      two:null,
      hundred:null,
      fifty:null
    };
    this.scount=this.api.seldertotal;
    localStorage.removeItem('scount');
  }


}
