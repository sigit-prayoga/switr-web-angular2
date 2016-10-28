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

  constructor(public af: AngularFire, private userService: UserService, private uiRouter: UIRouter) {
    this.af.auth.subscribe(auth => {
      if (!auth) {
        //stay here at login page
        console.log('Login first!');
        return;
      }
      
      console.log(auth);
      //navigate to home
      this.uiRouter.stateService.go('home');
      //we create the User model is based on the FirebaseAuthState
      var user = this.userService.getUserAuth(auth);
      //logged in already, save to db
      this.userService.addUser(user).subscribe(res => {
        console.log(res.message);
      },
        err => {
          console.log('Error when connecting to backend', err);
          //keep going to 'home', it doesn't matter as of now
        });
    });
  }

  ngOnInit() {
    //init the component, called after the constructor
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
