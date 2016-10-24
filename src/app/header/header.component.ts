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
  user = new User("","","","","");

  constructor(private af: AngularFire, private uiRouter: UIRouter, private userService: UserService ) {
    this.af.auth.subscribe(auth => {
      if (auth == null){
        //navigate to login screen
        this.uiRouter.stateService.go('login');
        this.loggedIn = false;
      }else{
        this.loggedIn = true;
        this.getUserProfile(auth);
      }
    });
   }

  ngOnInit() {
  }

  getUserProfile(auth: FirebaseAuthState) {
    var uid: string;
    if(!auth){
      console.log('No auth');
      return;
    }
    if(auth.facebook){
      //get from fb
      uid = auth.facebook.uid;
    }else if (auth.twitter){
      //get from twitter
      uid = auth.twitter.uid;
    }else if (auth.google){
      //get from google
      uid = auth.google.uid;
    }else{
      console.log('login signin method is weird')
      return
    }
    this.userService.getUser(uid).subscribe(res => {
      if(res == null){
        return;
      }
      this.user = new User(res.displayName, res.email, res.photoURL, res.providerId, res.uid);
    });
  }

  logout() {
    this.af.auth.logout();
  }
}
