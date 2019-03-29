import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello ServicereqComponent Component');
    this.text = 'Hello World';
  }

}
 