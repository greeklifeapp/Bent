import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobalProvider) {
  }

  auth = () => {
    this.global.auth()
  }

}
