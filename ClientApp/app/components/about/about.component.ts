import { Component, Inject } from '@angular/core';
import { AutoScrollAfterLoading } from '../shared/AutoScrollAfterLoading';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../shared/shared.css', './about.component.css']
})

export class AboutComponent extends AutoScrollAfterLoading {
  baseUrl: string;
  firstImgUrl: string;
  techLogoUrl01: string;
  techLogoUrl02: string;
  techLogoUrl03: string;
  techLogoUrl04: string;
  techLogoUrl05: string;
  techLogoUrl06: string;
  techLogoUrl07: string;
  techLogoUrl08: string;
  techLogoUrl09: string;

  constructor(route: ActivatedRoute, @Inject('BASE_URL') baseUrl: string) {
    super(route);
    this.baseUrl = baseUrl;
    this.firstImgUrl = this.baseUrl + 'img/laptop-01_640.jpg';
    this.techLogoUrl01 = this.baseUrl + 'img/csharp.png';
    this.techLogoUrl02 = this.baseUrl + 'img/netcore.svg';
    this.techLogoUrl03 = this.baseUrl + 'img/aspnetcore.jpg';
    this.techLogoUrl04 = this.baseUrl + 'img/azure.png';
    this.techLogoUrl05 = this.baseUrl + 'img/angular.png';
    this.techLogoUrl06 = this.baseUrl + 'img/html5.png';
    this.techLogoUrl07 = this.baseUrl + 'img/javascript.png';
    this.techLogoUrl08 = this.baseUrl + 'img/css3.png';
    this.techLogoUrl09 = this.baseUrl + 'img/sql.png';
  }

  techLogoHover() {
    console.log('event fired');
  }
}