import { Component, OnInit, Input } from '@angular/core';
import { Swit } from '../swit';

@Component({
  selector: 'each-swit',
  templateUrl: './each-swit.component.html',
  styleUrls: ['./each-swit.component.css']
})
export class EachSwitComponent implements OnInit {

	@Input()
	swit: Swit;

  	constructor() { }

  	ngOnInit() {

  	}

}
