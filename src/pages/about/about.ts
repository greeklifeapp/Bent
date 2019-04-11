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
    let ref = firebase.database().ref('serviceRequests')
    ref.on('value', (requestObj) => {
      Object.values(requestObj.val()).forEach(
        console.log
      )
    })
  }

}
