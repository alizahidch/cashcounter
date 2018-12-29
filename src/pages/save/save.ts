import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { SocialSharing } from '@ionic-native/social-sharing';

import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

import{SumPage} from'../../pages/sum/sum';
import { File } from '@ionic-native/file';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-save',
  templateUrl: 'save.html',
})
export class SavePage {

  data:any;
  name = localStorage.getItem('name');
  index = localStorage.getItem('index');
  organization = localStorage.getItem('organization');

fname;
  constructor(public navCtrl: NavController,private file:File,
    public navParams: NavParams,private api:ApiProvider,private socialSharing: SocialSharing,private toastCtrl: ToastController) {
      this.data = {
        myntrull:this.api.myntrull,
        mynt: this.api.mynt,
        sedler: this.api.sedler,
        totalsum:localStorage.getItem('tsum'),
        timestamp: new Date().toISOString()
      }
  }

  ionViewDidLoad() {
    console.log(this.data);
    console.log('ionViewDidLoad SavePage');
    this.generatePdf();
  }

goBack(){
  this.navCtrl.push(SumPage);
}

presentToast() {
  let toast = this.toastCtrl.create({
    message: 'File saved successfully',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });
  toast.present();
 
}

  generatePdf(){
    let index = Number(this.index);
    index++;
    localStorage.setItem('index', String(index))
    const div = document.getElementById("Html2Pdf");
    const options = {background:"white",height :div.clientHeight , width : div.clientWidth  };
    html2canvas(div,options).then((canvas)=>{
      //Initialize JSPDF
      var doc = new jsPDF("p","mm","a3");
      // Converting canvas to Image
      let imgData = canvas.toDataURL("image/PNG");
      //Add image Canvas to PDF
      doc.addImage(imgData, 'PNG', 20,20 );

      let pdfOutput = doc.output();
      // using ArrayBuffer will allow you to put image inside PDF
      let buffer = new ArrayBuffer(pdfOutput.length);
      let array = new Uint8Array(buffer);
      for (var i = 0; i < pdfOutput.length; i++) {
          array[i] = pdfOutput.charCodeAt(i);
      }


      //This is where the PDF file will stored , you can change it as you like
      // for more information please visit https://ionicframework.com/docs/native/file/
      const directory = this.file.documentsDirectory ;

      //Name of pdf
      const fileName = "testing.pdf"
this.fname=fileName;
      //Writing File to Device
      this.file.writeFile(directory,fileName,buffer)
      .then((success)=> console.log("File created Succesfully" + JSON.stringify(success)),this.presentToast)
      .catch((error)=> console.log("Cannot Create File " +JSON.stringify(error)));
    })
  }



  appShare(){
    this.socialSharing.share('testing', null, this.file.documentsDirectory + this.fname, null)
 }
print(){
  this.socialSharing.share('testing', null, this.file.documentsDirectory + this.fname, null)
}

}
