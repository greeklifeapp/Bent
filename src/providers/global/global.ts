import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

declare var gapi: any;

@Injectable()
export class GlobalProvider {

  constructor(public http: HttpClient) {
    const config = {
      apiKey: "AIzaSyDNs1AeJaJ7_yrZrlqaBc6UY4DTzKCzxMw",
      authDomain: "testingjs-6c353.firebaseapp.com",
      databaseURL: "https://testingjs-6c353.firebaseio.com",
      projectId: "testingjs-6c353",
      storageBucket: "testingjs-6c353.appspot.com",
      messagingSenderId: "164663954733"
    };
    firebase.initializeApp(config);

    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: "AIzaSyADDwygDKqWmMNq8XAaz7gvqYh5lEAMRgc",
        clientId: "111558558514-opgcs0nmd9oeqtv2mn0pa0q3s766g444.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/calendar",
      })
    })

    console.log('he')
  }

}
