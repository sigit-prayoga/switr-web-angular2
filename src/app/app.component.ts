import { Component } from '@angular/core';
import { Swit } from './swit';
import { ApiService} from './api.service';
import { OrderByTimePipe } from './order-by-time.pipe';
import { EachSwitComponent } from './each-swit/each-swit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  swits: Swit[] = [];
  model: any = {
    swit: '', //textarea
    usingSocket: false, //with socketIO or not
    isReact: false, //render the view with react
    filterBy: '' //search textarea affect the list of swits
  }

  constructor(private apiService: ApiService){ }

  ngOnInit(){
    //get swits when initialization
    this.apiService.getSwits().subscribe(res => this.swits = res.swits); 
  }

  addSwit(){
    // get swit from model and subscribe for the response, alternatively you can use Promise.
  	this.apiService.sendSwit(this.model.swit).subscribe(res => this.swits.push(res.swit));
    //reset the textarea
    //TODO: may put this in the subscription above, just to make sure it resets when it's successfully done.
    this.model.swit = '';
  }
}
