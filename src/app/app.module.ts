import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {Ng2PaginationModule} from 'ng2-pagination'; //importing ng2-pagination


import { AgmCoreModule } from 'angular2-google-maps/core';//AgmCoreModule for google maps



// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent }  from './app.component';
import {CompanySearchComponent} from './components/company-search.component';
import {CompanyDetailComponent} from './components/company-detail.component';
import {CompanyService} from './services/company.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, 
                  InMemoryWebApiModule.forRoot(InMemoryDataService), 
                  AppRoutingModule, Ng2PaginationModule,
                  AgmCoreModule.forRoot({ apiKey: 'AIzaSyA6iMuRcOz6qj_zxEa_Xjp0WRjrcM1qtrQ' })

                ],
  declarations: [ AppComponent, CompanyDetailComponent, CompanySearchComponent ],
  providers:    [CompanyService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }