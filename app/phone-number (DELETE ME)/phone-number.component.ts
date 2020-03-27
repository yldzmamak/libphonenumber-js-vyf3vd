import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
// import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { AsYouType } from 'libphonenumber-js'

@Component({
  selector: 'phone-number',
  templateUrl: './phone-number.component.html',
})
export class PhoneNumberComponent implements OnChanges {

  @Input() phoneNumber: string;
  phoneNumberFormatted;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.phoneNumber) {
      this.phoneNumberFormatted = new AsYouType('US').input(this.phoneNumber);
    }
  }

}
