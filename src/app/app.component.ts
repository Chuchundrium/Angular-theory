import { Component } from '@angular/core';
import {AppCounterService} from './services/app-counter.service';
import {LocalCounterService} from './services/local-counter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService] // local using of service without import in app.module
})
export class AppComponent  {
  constructor(public appCounterService: AppCounterService,
              public localCounterService: LocalCounterService) {  }

}
