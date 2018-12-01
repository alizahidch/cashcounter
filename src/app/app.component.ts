import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, androidPermissions: AndroidPermissions, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      androidPermissions.checkPermission(androidPermissions.PERMISSION.CAMERA).then(
        result => console.log('Has permission?',result.hasPermission),
        err =>{
          androidPermissions.requestPermission(androidPermissions.PERMISSION.CAMERA);
          androidPermissions.requestPermission(androidPermissions.PERMISSION.CAMERA);
          androidPermissions.requestPermission(androidPermissions.PERMISSION.CAMERA);

          }
      );
    androidPermissions.requestPermissions([
      androidPermissions.PERMISSION.CAMERA,
      androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
      androidPermissions.PERMISSION.MANAGE_DOCUMENTS,
      androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
       androidPermissions.PERMISSION.GET_ACCOUNTS]);

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      if(localStorage.getItem('name') === null){
        localStorage.setItem('name', '<enter-name>');
      }
      if(localStorage.getItem('index') === null){
        localStorage.setItem('index',String(0));
      }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
