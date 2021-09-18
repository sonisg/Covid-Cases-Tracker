import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { GoogleChartsModule } from 'angular-google-charts'
const routes : Routes = [
  {path : '', component: HomeComponent },
  {path :'countries', component : CountriesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent, CountriesComponent, DashboardCardComponent
  ],
  imports: [
 [RouterModule.forRoot(routes)],
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    GoogleChartsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
