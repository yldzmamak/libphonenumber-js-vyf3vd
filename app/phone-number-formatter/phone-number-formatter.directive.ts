import {Directive, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, HostBinding} from '@angular/core';
import { AsYouType, CountryCode } from 'libphonenumber-js'

@Directive({
    selector: '[phoneNumber]'
    // host: {
    //   '[value]': 'phoneNumber'
    // }
})
export class PhoneNumberFormatter implements OnInit, OnChanges {

    @Input() phoneNumber: string;
    @Input() country: CountryCode = 'US';
    @Output() phoneNumberChange: EventEmitter<string> = new EventEmitter<string>();

    // @HostBinding('value') phoneNumber: string;

    ngOnInit() {
      // ensures the phone number is formatted when first initialized
      this.phoneNumberChange.next(this.formatNumber());
    }

    ngOnChanges(changes: SimpleChanges) {
      if (changes.phoneNumber || changes.country) {

        this.phoneNumberChange.emit(this.formatNumber());

        // console.log(
        //   "country", this.country,
        //   "outputPhone", outputPhone,
        //   "National", asYouType.getNumber() ? asYouType.getNumber().formatNational() : '',
        //   "International", asYouType.getNumber() ? asYouType.getNumber().formatInternational() : '',
        // );
      }
    }

    formatNumber(): string {
      const asYouType = new AsYouType(this.country);
      asYouType.input(this.phoneNumber);
      
      return asYouType.getNumber().formatNational();


    }

}