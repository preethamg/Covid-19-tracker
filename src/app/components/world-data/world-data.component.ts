import { Component, OnInit, OnDestroy } from '@angular/core';
import { httpService } from '../../services/httpService';

@Component({
  selector: 'app-world-data',
  templateUrl: './world-data.component.html',
  styleUrls: ['./world-data.component.css']
})
export class WorldDataComponent implements OnInit, OnDestroy {

  covidWorldDataApiURL: string = 'https://api.covid19api.com/world/total';
  worldTotalConfirmedCount: number = 0;
  worldTotalRecoveredCount: number = 0;
  worldTotalDeathCount: number = 0;

  constructor(private httpService: httpService) { }

  ngOnInit(): void {
    this.httpService.get(this.covidWorldDataApiURL).subscribe((data) => {
      this.worldTotalConfirmedCount = data.TotalConfirmed;
      this.worldTotalRecoveredCount = data.TotalDeaths;
      this.worldTotalDeathCount = data.TotalRecovered;
    });
  }
  
   ngOnDestroy(){
    //alert('This component is about to get destroyed');
  }
}
