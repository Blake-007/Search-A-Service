import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {Company} from '../company';
import {CompanyService} from '../services/company.service';

import {AgmCoreModule} from 'angular2-google-maps/core';

@Component({
   moduleId: module.id,
  selector: 'detail',
  templateUrl:`company-detail.component.html`,
  styleUrls: [`company-detail.component.css`]
  
})
export class CompanyDetailComponent implements OnInit
{
    company: Company;
    constructor(private companyService: CompanyService, private route: ActivatedRoute)
    {

    }
    ngOnInit():void {
    this.route.params
      .switchMap((params: Params) => this.companyService.getCompany(+params['id']))
      .subscribe(company => this.company = company);
    }
   
}