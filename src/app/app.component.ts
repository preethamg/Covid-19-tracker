import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  worldPageActive = true;
  countryPageActive = false;

  constructor(private router: Router) {
    router.events.subscribe((value) => {
      //check if the router has changed and highlight the respective router links on the navbar
      if (value instanceof NavigationEnd) {
        let getrouterPagePosition = window.location.href.split('/').length - 1;
        let currentPage = window.location.href.split('/')[getrouterPagePosition];
        if (currentPage && currentPage.toLowerCase() == 'world') {
          this.worldPageActive = true;
          this.countryPageActive = false;
        }
        else if (currentPage && currentPage.toLowerCase() == 'country') {
          this.worldPageActive = false;
          this.countryPageActive = true;
        }
        else {
          this.worldPageActive = false;
          this.countryPageActive = false;
        }
      }
    })
  }

  ngOnInit() {

  }
}
