import { Component } from '@angular/core';
import { AutoScrollAfterLoading } from '../shared/AutoScrollAfterLoading';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../shared/shared.css', './about.component.css']
})
export class AboutComponent extends AutoScrollAfterLoading {

  constructor(route: ActivatedRoute) {
    super(route);
  }
}
