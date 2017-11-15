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

  constructor(route: ActivatedRoute, @Inject('BASE_URL') baseUrl: string) {
    super(route);
    this.baseUrl = baseUrl;
    this.firstImgUrl = this.baseUrl + 'img/laptop-01_640.jpg';
  }
}