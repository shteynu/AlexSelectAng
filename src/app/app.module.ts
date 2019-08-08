import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AddressesComponent} from './addresses/addresses.component';
import {SelectComponent} from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressesComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
