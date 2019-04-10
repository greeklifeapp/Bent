import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the ServicereqComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'servicereq',
  templateUrl: 'servicereq.html'
})
export class ServicereqComponent {

  request = {"user": firebase.auth().currentUser.displayName,
             "email": firebase.auth().currentUser.email,
             "id": Math.round(10000000000*Math.random())
            }

  constructor(public navCtrl: NavController) {
   this.navCtrl.swipeBackEnabled = true;
  }

  onFormSubmit = () => {
    console.log(this.request)
    firebase.database().ref('serviceRequests/' + this.request.id).set(
      this.request
    );

  }
}
 