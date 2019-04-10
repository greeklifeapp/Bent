import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
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

  ngOnInit() {
    this.loadRequests()
  }

  onPlusClicked = () => {
    this.navCtrl.push(ServicereqComponent)
  }

  loadRequests = () => {
    let ref = firebase.database().ref()
    ref.once('value').then((item) => {
      console.log(item)
    })
  }

}
