import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Router }   from '@angular/router';
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

  constructor(private af: AngularFire, private router: Router, private userService: UserService) { 
    console.log('init header');
    this.af.auth.subscribe(auth => {
      this.loggedIn = (auth != null);
      if (!auth) {
        //navigate to login screen
        this.router.navigateByUrl('/login');
      } else {
        console.log('Already logged in, enjoy');
        this.getUserProfile(auth);
      }
    });
  }

  ngOnInit() {
    //init the component, called after the constructor
  }

  getUserProfile(auth: FirebaseAuthState) {
    var loggedInUser = this.userService.getUserAuth(auth);
    if(!loggedInUser){
      console.log('Cannot recived null auth.');
      return;
    }
    console.log("uid...", loggedInUser.uid);
    this.userService.getUser(loggedInUser.uid).subscribe(res => {
      if (res == null) {
        console.log('Something weird occured. Force logout!');
        this.router.navigateByUrl('/login');
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
