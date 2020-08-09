import { Component, OnInit } from '@angular/core';
import { httpService } from '../../services/httpService';

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.css']
})
export class CountryDataComponent implements OnInit {

  countryListAPIURL: string = 'https://api.covid19api.com/countries';
  countryDataAPIURL: string = 'https://api.covid19api.com/total/dayone/country/';
  countryList: any[] = [];
  countrywiseConfirmedCount: number = 0;
  countrywiseRecoveredCount: number = 0;
  countrywiseDeathsCount: number = 0;
  displayedCountry:string = 'None';
  selectedCountry: string = 'None';
  lastUpdatedDate: any;

  constructor(private http: httpService) { }

  ngOnInit(): void {
    this.http.get(this.countryListAPIURL).subscribe((data) => {
      data = data.sort(function (a, b) {
        return a.Slug.localeCompare(b.Slug);
      });

      this.countryList = data;
    })
  }

  countrySelected(value) {
    if (value) {
      //populate the selected country value 
      this.selectedCountry = value;
    }
  }

  getCountryData() {
    //check if the selectedCountry is not reset or empty 
    if (this.selectedCountry && this.selectedCountry.toLowerCase() != 'none') {
      let url = `${this.countryDataAPIURL}${this.selectedCountry}`;

      this.http.get(url).subscribe((data) => {
        if (data.length > 0) {
          let latestData = data.length - 1;
          
          //populate the values on the ui
          this.displayedCountry = data[latestData].Country;
          this.countrywiseConfirmedCount = data[latestData].Confirmed;
          this.countrywiseRecoveredCount = data[latestData].Recovered;
          this.countrywiseDeathsCount = data[latestData].Deaths;
          this.lastUpdatedDate = data[latestData].Date;
        }
        else{
          this.displayedCountry = this.selectedCountry;
          this.countrywiseConfirmedCount = 0;
          this.countrywiseRecoveredCount = 0;
          this.countrywiseDeathsCount = 0;
        }
      });
    }

  }

}
