import { Injectable } from '@angular/core';

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

totalsum=null;

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
