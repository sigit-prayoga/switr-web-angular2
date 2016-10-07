import { Pipe, PipeTransform } from '@angular/core';
import { Swit } from './swit';

@Pipe({
  name: 'orderByTime',
  pure: false // to update the view when array get changed
})
export class OrderByTimePipe implements PipeTransform {

  transform(swits: Swit[], args?: any): any {
  	if(swits) {
  		//skip when falsy
  		swits.sort((a: Swit, b: Swit) => {
  			if(a.time > b.time) {
  				//if the time of A is greater, put before
  				return -1;
  			}else if (a.time < b.time){
  				//if the time of B is greater, put after
  				return 1;
  			}else{
  				//if A time is equal to B time
  				return 0;
  			}
  		});
  	}
  	//return all sorted swits
    return swits;
  }
}
