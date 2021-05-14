import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  siteLanguage?= 'English';
  siteLocale = '';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' }
  ];

  constructor() { }

  ngOnInit() {
    this.siteLocale = window.location.pathname.split('/')[1];
    console.log(this.siteLocale);
    this.siteLanguage = this.languageList.find(x => x.code === this.siteLocale)?.label;

  }
}
