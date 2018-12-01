import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  constructor(public navCtrl: NavController,private loadingCtrl:LoadingController, public navParams: NavParams) {
  }

  name = localStorage.getItem('name');
  organization = localStorage.getItem('organization');

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  

  update(){
   let load= this.loadingCtrl.create()
   load.present();
    localStorage.setItem('name', this.name);
    localStorage.setItem('organization', this.organization);

    setTimeout(()=>{
     load.dismissAll();
     this.navCtrl.pop();

    }, 2600)
  }

}
