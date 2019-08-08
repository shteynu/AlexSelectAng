import { Component, OnInit } from '@angular/core';
import { addresses } from '../../assets/addresses';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  addr: object;
  countries: string[] = [];

  country: string;
  city: string;

  constructor() { }

  ngOnInit() {
    this.addr = addresses;
    this.countries = Object.keys(this.addr);
    this.country = this.countries[0];
    this.city = this.addr[this.country][0];
  }

  setCountry(event) {
    this.country = event;
    this.city = this.addr[this.country][0];
  }

  setCity(event ) {
    this.city = event;
  }
}
