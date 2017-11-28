import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoScrollAfterLoading } from '../shared/AutoScrollAfterLoading';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['../shared/shared.css', './blog.component.css']
})
export class BlogComponent extends AutoScrollAfterLoading {

    constructor(route: ActivatedRoute) {
        super(route);
    }
}