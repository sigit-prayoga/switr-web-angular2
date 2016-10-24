import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { UserService } from '../user.service';
import { User } from '../user';

import { UIRouter } from "ui-router-ng2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent implements OnInit {

  auth;

  constructor(public af: AngularFire, private userService: UserService, private uiRouter: UIRouter) {
    this.af.auth.subscribe(auth => {
      console.log(auth)
      this.auth = auth
      if (this.auth) {
        //navigate to home
        uiRouter.stateService.go('home');
        var user: User;

        if (this.auth.facebook) {
          user = this.auth.facebook;
        } else if (this.auth.twitter) {
          user = this.auth.twitter;
        } else if (this.auth.google) {
          user = this.auth.google;
        } else {
          console.log('unregistered signin method');
          return;
        }

        //logged in already, save to db
        this.userService.addUser(user).subscribe(res => {
          console.log('Adding new user: ', res);
        });
      }
    });
  }

  ngOnInit() {

  }

  loginFacebook() {
    this.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    })
  }

  loginTwitter() {
    this.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup
    })
  }

  loginGoogle() {
    this.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  }

  login(config: any) {
    this.af.auth.login(config)
  }

  logout() {
    this.af.auth.logout();
  }
}
