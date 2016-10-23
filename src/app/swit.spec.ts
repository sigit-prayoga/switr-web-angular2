/* tslint:disable:no-unused-variable */

import { async, inject } from '@angular/core/testing';
import {Swit} from './swit';

describe('Swit', () => {
  it('should create an instance', () => {
    var swit = new Swit('hello', new Date());
    expect(swit).toBeTruthy();
  });
});
