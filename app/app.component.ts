import { Component } from '@angular/core';
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { AsYouType, CountryCode } from 'libphonenumber-js'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  phoneNumber: string = '2125698870';
  exampleNumbers: { country: CountryCode, number: string }[] = [
    { "country": "US", "number": "212 569 8870" },
    { "country": "GB", "number": "020 7946 0830" },
    { "country": "GB", "number": "+44 20 7946 0712" }
  ];

  countries: CountryCode[] = [
    'CA', 'DE', 'FR', 'GB', 'IN', 'MX', 'RU', 'US'
  ];

  selectedCountry = this.countries.find(c => c === 'US');

  phoneNumberChange(value) {
    console.log("in change", value);
    this.phoneNumber = value;
  }

}
