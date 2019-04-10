import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  request = {}

  constructor(public navCtrl: NavController) {
   this.navCtrl.swipeBackEnabled = true;
  }

  onFormSubmit = () => {
    console.log(this.request)
  }
}
 