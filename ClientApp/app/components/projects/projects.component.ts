import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoScrollAfterLoading } from '../shared/AutoScrollAfterLoading';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['../shared/shared.css', './projects.component.css']
})
export class ProjectsComponent extends AutoScrollAfterLoading {

    constructor(route: ActivatedRoute) {
        super(route);
    }
}