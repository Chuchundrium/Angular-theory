import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {StyleDirective} from './directives/style.directive';
import { Style2Directive } from './directives/style2.directive';
import { IfnotDirective } from './directives/ifnot.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    Style2Directive,
    IfnotDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
