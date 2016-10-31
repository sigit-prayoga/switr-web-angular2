import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Swit } from '../swit';
import { ApiService } from '../api.service';
import { OrderByTimePipe } from '../order-by-time.pipe';
import { EachSwitComponent } from '../each-swit/each-swit.component';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Router }   from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiService]
})
export class HomeComponent implements OnInit {
  swits: Swit[] = [];
  model: any = {
    swit: '', //textarea
    usingSocket: false, //with socketIO or not
    isReact: false, //render the view with react
    filterBy: '' //search textarea affect the list of swits
  }

  constructor(private apiService: ApiService, private af: AngularFire, private router: Router) { }

  ngOnInit() {
    console.log('init home...', this.af.auth);
    this.af.auth.subscribe(auth => {
      if (!auth) {
        console.log('You are not logged in. Please login using one of the options.');
        //not logged in, navigate to login
        this.router.navigateByUrl('/login');
        return;
      } else {
        //get swits when initialization
        this.apiService.getSwits().subscribe(res => this.swits = res.swits);
      }
    });
  }

  addSwit() {
    // get swit from model and subscribe for the response, alternatively you can use Promise.
    this.apiService.sendSwit(this.model.swit).subscribe(res => this.swits.push(res.swit));
    //reset the textarea
    //TODO: may put this in the subscription above, just to make sure it resets when it's successfully done.
    this.model.swit = '';
  }
}
