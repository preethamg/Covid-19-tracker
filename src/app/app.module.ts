import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldDataComponent } from './components/world-data/world-data.component';
import { CountryDataComponent } from './components/country-data/country-data.component';
import {httpService} from './services/httpService';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldDataComponent,
    CountryDataComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [httpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
