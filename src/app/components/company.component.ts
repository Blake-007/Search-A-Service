import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Company } from '../company';
import { CompanyService } from '../services/company.service';

@Component({
    selector: 'company',
    template: ''

})
export class CompanyComponent implements OnInit
{
    companies: Company[];
    constructor(private companyService: CompanyService)
    {

    }
    getCompanies(): void 
    {
        this.companyService.getCompanies().then(companies => this.companies = companies);
    }
    ngOnInit(): void
    {
        this.getCompanies();
    }
    getAllCompanies()
    {
        return this.companies;
    }
}