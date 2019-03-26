import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

declare var gapi: any;

@Injectable()
export class GlobalProvider {

  constructor(public http: HttpClient) {
    const config = {
      apiKey: "AIzaSyBZFKeQp82ctb6YY-g2vXoc0yhGowgt8JY",
      authDomain: "bentjs-94631.firebaseapp.com",
      databaseURL: "https://bentjs-94631.firebaseio.com",
      projectId: "bentjs-94631",
      storageBucket: "bentjs-94631.appspot.com",
      messagingSenderId: "223233145097"
    };
    firebase.initializeApp(config);

    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: "AIzaSyADDwygDKqWmMNq8XAaz7gvqYh5lEAMRgc",
        clientId: "111558558514-opgcs0nmd9oeqtv2mn0pa0q3s766g444.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/calendar",
      })
    })
  }

  auth = () =>{
    let googleUser = gapi.auth2.getAuthInstance().signIn()
      .then((res) => {
        let token = res.getAuthResponse().id_token;
        let creds = firebase.auth.GoogleAuthProvider.credential(token);
        firebase.auth().signInWithCredential(creds)
          .then(user => {
            console.log(user)
          })
      }) 
  }

}
