import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';


import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Company }  from '../company';
import {CompanyService} from './company.service';

@Injectable()

export class CompanySearchService
{
    constructor(private http: Http)
    {

    }
    search(term: string): Observable<Company[]> {
    return this.http
               .get(`app/companies/?type=${term}`)
               .map(response => response.json().data as Company[]);
  }
}