import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-scannerPage',
  templateUrl: 'scannerPage.html'
})
export class ScannerPage {

   scanData : {};
   options : BarcodeScannerOptions;
   constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {
  }    

  scan(){
    this.options = {
        prompt : "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
      this.navCtrl.push(InfoPage, {
         data: this.scanData = barcodeData
        });

        console.log(this.scanData + "this is scan data");
    }, (err) => {
        console.log("Error occured : " + err);
    });         
  }

   refresh(){
    window['location'].reload();   
   }
}
