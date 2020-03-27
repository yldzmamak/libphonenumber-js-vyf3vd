import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { PhoneNumberFormatter } from './phone-number-formatter/phone-number-formatter.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PhoneNumberFormatter ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
