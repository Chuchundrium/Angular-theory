import { Injectable } from '@angular/core';

@Injectable()
export class LocalCounterService {
  counter = 0;

  constructor() { }

  increase() {
    this.counter++;
  }
  decrease() {
    this.counter--;
  }

}
