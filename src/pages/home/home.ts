import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as Raven from 'raven-js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    Raven.setUserContext({
      username: 'Username',
      email: 'username@example.com',
      id: '123456'
    });
  }

  throwError(){
    throw new Error("This is an Error");
  }

}
