import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/global/global';
import { LoginPage } from '../pages/login/login';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { FcmProvider } from '../providers/fcm/fcm';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx'

const firebase = {
  apiKey: "AIzaSyBZFKeQp82ctb6YY-g2vXoc0yhGowgt8JY",
  authDomain: "bentjs-94631.firebaseapp.com",
  databaseURL: "https://bentjs-94631.firebaseio.com",
  projectId: "bentjs-94631",
  storageBucket: "bentjs-94631.appspot.com",
  messagingSenderId: "223233145097"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
    HttpClientModule,
    Firebase,
    FcmProvider
  ]
})
export class AppModule {}
