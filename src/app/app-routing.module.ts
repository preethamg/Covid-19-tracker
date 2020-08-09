import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDataComponent } from './components/country-data/country-data.component';
import { WorldDataComponent } from './components/world-data/world-data.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'world', component: WorldDataComponent },
  { path: 'Country', component: CountryDataComponent },
  { path: '', redirectTo: '/world', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
