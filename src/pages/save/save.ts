import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';


import { File } from '@ionic-native/file';


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


  constructor(public navCtrl: NavController,private file:File,
    public navParams: NavParams,private api:ApiProvider) {
      this.data = {
        myntrull:this.api.myntrull,
        mynt: this.api.mynt,
        sedler: this.api.sedler,
        timestamp: new Date().toISOString()
      }
  }

  ionViewDidLoad() {
    console.log(this.data);
    console.log('ionViewDidLoad SavePage');
    this.generatePdf();
  }



  generatePdf(){
    let index = Number(this.index);
    index++;
    localStorage.setItem('index', String(index))
    const div = document.getElementById("Html2Pdf");
    const options = {background:"white",height :div.clientHeight , width : div.clientWidth  };
    html2canvas(div,options).then((canvas)=>{
      //Initialize JSPDF
      var doc = new jsPDF("p","mm","a4");
      //Converting canvas to Image
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
      const directory = this.file.externalApplicationStorageDirectory ;

      //Name of pdf
      const fileName = "example.pdf";

      //Writing File to Device
      this.file.writeFile(directory,fileName,buffer)
      .then((success)=> console.log("File created Succesfully" + JSON.stringify(success)))
      .catch((error)=> console.log("Cannot Create File " +JSON.stringify(error)));
    })
  }





}
