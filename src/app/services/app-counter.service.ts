import {Injectable} from '@angular/core';

@Injectable({
  // for registration in root module without import in providers
  providedIn: 'root'
})
export class AppCounterService {
  counter = 0;
  increase() {
    this.counter++;
  }
  decrease() {
    this.counter--;
  }
}
