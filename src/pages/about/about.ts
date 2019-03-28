import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  onFormSubmit = () => {
    console.log('form submitted')
  }

  onPlusClicked = () => {
    console.log('plus clicked')
  }

}
