import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { ServicereqComponent } from '../../components/servicereq/servicereq';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
    this.navCtrl.swipeBackEnabled = true;
  }

  onFormSubmit = () => {
  }

  onPlusClicked = () => {
    this.navCtrl.push(ServicereqComponent)
  }

}
