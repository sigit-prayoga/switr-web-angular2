import { Component, OnInit, Input } from '@angular/core';
import { Swit } from '../swit';
import { ApiService } from '../api.service';

@Component({
  selector: 'each-swit',
  templateUrl: './each-swit.component.html',
  styleUrls: ['./each-swit.component.css']
})
export class EachSwitComponent implements OnInit {

	@Input()
	swit: Swit;

  	constructor(private apiService: ApiService) { }

  	ngOnInit() {

  	}

	like(switObj){
		if(switObj && switObj.switId){
			this.apiService.likeSwit(switObj.switId, 'userId').subscribe(
				res => {
					//should change this 'userId' with the real id of the current user
					this.swit.likes.push('userId');
				},
				err => {
					console.log('something wrong when you like the swit');
				}
			);
		}
	}

}
