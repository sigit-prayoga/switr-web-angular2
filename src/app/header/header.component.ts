import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { UIRouter } from 'ui-router-ng2';
import { User } from '../user';
import { UserService } from '../user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserService]
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false;
  user = new User("", "", "", "", "");

  constructor(private af: AngularFire, private uiRouter: UIRouter, private userService: UserService) { }

  ngOnInit() {
    console.log('init header');
    this.af.auth.subscribe(auth => {
      this.loggedIn = (auth != null);
      if (!auth) {
        console.log('Login first!');
        //navigate to login screen
        this.uiRouter.stateService.go('login');
      } else {
        console.log('Already logged in, enjoy');
        this.getUserProfile(auth);
      }
    });
  }

  getUserProfile(auth: FirebaseAuthState) {
    var loggedInUser: any;
    if (!auth) {
      console.log('No auth');
      return;
    }
    if (auth.facebook) {
      //get from fb
      loggedInUser = auth.facebook;
    } else if (auth.twitter) {
      //get from twitter
      loggedInUser = auth.twitter;
    } else if (auth.google) {
      //get from google
      loggedInUser = auth.google;
    } else {
      console.log('login signin method is weird')
      return
    }
    this.userService.getUser(loggedInUser.uid).subscribe(res => {
      if (res == null) {
        console.log('Something weird occured. Force logout!');
        this.uiRouter.stateService.go('login');
        //logout immediately
        this.af.auth.logout()
        return;
      }
      //construct new user from response
      this.user = new User(res.displayName, res.email, res.photoURL, res.providerId, res.uid);
    }, err => {
      console.log('Error when fetching user profile to our backend. Instead get user directly from Firebase');
      //instead, construct user from firebase
      this.user = new User(loggedInUser.displayName, loggedInUser.email, loggedInUser.photoURL, loggedInUser.providerId, loggedInUser.uid);
    });
  }

  logout() {
    //firebase logout
    this.af.auth.logout();
  }
}
