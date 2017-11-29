import { Title } from '@angular/platform-browser';
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
  img01Url: string;
  img02Url: string;

  techLogoUrl01: string;
  techLogoUrl02: string;
  techLogoUrl03: string;
  techLogoUrl04: string;
  techLogoUrl05: string;
  techLogoUrl06: string;
  techLogoUrl07: string;
  techLogoUrl08: string;
  techLogoUrl09: string;
  techLogoUrl10: string;

  employerLogoUrl01: string;
  employerLogoUrl02: string;
  employerLogoUrl03: string;
  employerLogoUrl04: string;

  certBadgeUrl01: string;
  certBadgeUrl02: string;

  certDownloadUrl01: string;
  certDownloadUrl02: string;

  displayJobDescription01: string = 'initial';
  displayJobDescription02: string = 'none';
  displayJobDescription03: string = 'none';
  displayJobDescription04: string = 'none';

  private pageTitle: string = 'About - Steven Voros';

  constructor(route: ActivatedRoute, @Inject('BASE_URL') baseUrl: string, private titleService: Title) {
    super(route);
    this.titleService.setTitle(this.pageTitle);

    this.baseUrl = baseUrl;
    this.img01Url = this.baseUrl + 'img/laptop-01_640.jpg';
    this.img02Url = this.baseUrl + 'img/consulting.jpg';

    this.techLogoUrl01 = this.baseUrl + 'img/csharp.png';
    this.techLogoUrl02 = this.baseUrl + 'img/netcore.svg';
    this.techLogoUrl03 = this.baseUrl + 'img/aspnetcore.jpg';
    this.techLogoUrl04 = this.baseUrl + 'img/azure.png';
    this.techLogoUrl05 = this.baseUrl + 'img/angular.png';
    this.techLogoUrl06 = this.baseUrl + 'img/html5.png';
    this.techLogoUrl07 = this.baseUrl + 'img/javascript.png';
    this.techLogoUrl08 = this.baseUrl + 'img/css3.png';
    this.techLogoUrl09 = this.baseUrl + 'img/sql.png';
    this.techLogoUrl10 = this.baseUrl + 'img/ef.png';

    this.employerLogoUrl01 = this.baseUrl + 'img/audi.png';
    this.employerLogoUrl02 = this.baseUrl + 'img/volkswagen.png';
    this.employerLogoUrl03 = this.baseUrl + 'img/oneremains.png';
    this.employerLogoUrl04 = this.baseUrl + 'img/freelancer.svg';

    this.certBadgeUrl01 = this.baseUrl + 'img/badge_MCSE.png';
    this.certBadgeUrl02 = this.baseUrl + 'img/badge_MCSD.png';

    this.certDownloadUrl01 = this.baseUrl + 'files/certificate_MCSE.pdf';
    this.certDownloadUrl02 = this.baseUrl + 'files/certificate_MCSD.pdf';
  }

  selectorClicked(element: Element, otherElements: Element[]) {
    element.className = 'selector-button selector-button-selected';
    otherElements.forEach(el => {
      el.className = 'selector-button';
    });
    if (element.id == 'selector01') {
      this.displayJobDescription01 = 'initial';
      this.displayJobDescription02 = 'none';
      this.displayJobDescription03 = 'none';
      this.displayJobDescription04 = 'none';
    }
    else if (element.id == 'selector02') {
      this.displayJobDescription01 = 'none';
      this.displayJobDescription02 = 'initial';
      this.displayJobDescription03 = 'none';
      this.displayJobDescription04 = 'none';
    }
    else if (element.id == 'selector03') {
      this.displayJobDescription01 = 'none';
      this.displayJobDescription02 = 'none';
      this.displayJobDescription03 = 'initial';
      this.displayJobDescription04 = 'none';
    }
    else if (element.id == 'selector04') {
      this.displayJobDescription01 = 'none';
      this.displayJobDescription02 = 'none';
      this.displayJobDescription03 = 'none';
      this.displayJobDescription04 = 'initial';
    }
  }
}