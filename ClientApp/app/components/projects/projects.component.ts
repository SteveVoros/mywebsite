import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoScrollAfterLoading } from '../shared/AutoScrollAfterLoading';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['../shared/shared.css', './projects.component.css']
})
export class ProjectsComponent extends AutoScrollAfterLoading {
    imageUrlTile01: string;
    imageUrlTile02: string;
    baseUrl: string;

    constructor(route: ActivatedRoute, @Inject('BASE_URL') baseUrl: string) {
        super(route);
        this.baseUrl = baseUrl;
        this.imageUrlTile01 = this.baseUrl + 'img/tile-cloud.png';
        this.imageUrlTile02 = this.baseUrl + 'img/tile-cloud-AWS.png';
    }
}