import { Injectable } from '@angular/core';
import { setupDeepLinker } from 'ionic-angular/umd/navigation/deep-linker';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  
  constructor() {
    console.log('Hello ApiProvider Provider');
  }



  sedler={
    thousand:null,
    five:null,
    two:null,
    hundred:null,
    fifty:null
  }

  mynt={
    twenty:null,
    ten:null,
    five:null,
    one:null,
  }
  myntrull ={
    twenty:null,
    ten:null,
    five:null,
    one:null,

  }
  totalsum=null;
  seldertotal=(this.sedler.thousand * 1000) + (this.sedler.five * 500) + (this.sedler.two * 200) + (this.sedler.hundred * 100) + (this.sedler.fifty * 50);
  mynttotal=(this.mynt.twenty * 20) + (this.mynt.ten * 10) + (this.mynt.five * 5) + (this.mynt.one * 1) ;
  myntrulltotal=(this.myntrull.twenty * 20) + (this.myntrull.ten * 10) + (this.myntrull.five * 5) + (this.myntrull.one * 1) ;
resetSedler(){
  this.sedler={
    thousand:null,
    five:null,
    two:null,
    hundred:null,
    fifty:null
  }
}
resetMynt(){
  this.mynt={
    twenty:null,
    ten:null,
    five:null,
    one:null,
  }
}

resetMyntrull(){
  this.myntrull ={
    twenty:null,
    ten:null,
    five:null,
    one:null,

  }
}
  reset(){


  this.sedler={
    thousand:null,
    five:null,
    two:null,
    hundred:null,
    fifty:null
  }

  this.mynt={
    twenty:null,
    ten:null,
    five:null,
    one:null,
  }
  this.myntrull ={
    twenty:null,
    ten:null,
    five:null,
    one:null,

  }
  }
}
