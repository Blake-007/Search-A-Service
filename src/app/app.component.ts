import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
<nav class="navbar navbar-inverse" role="navigation">
    <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" routerLink="/">Search A Com</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a routerLink="/">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
    </div>

  </nav>
  <router-outlet></router-outlet>`,
  styles: [`.navbar 
            {
                padding-top: 15px;
                padding-bottom: 15px;
                border: 0;
                border-radius: 0;
                margin-bottom: 0;
                font-size: 12px;
                letter-spacing: 5px;
            }

        .navbar-nav li a:hover 
        {
            color: white !important;
        }
        body 
        {
            font: 20px Montserrat, sans-serif;
            line-height: 1.8;
            color: #f5f6f7;
        }`]
})
export class AppComponent implements OnInit  
{
    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
}
