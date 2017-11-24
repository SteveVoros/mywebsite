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
    imageUrlTile03: string;
    imageUrlTile04: string;
    baseUrl: string;

    displayPopupBackground: string = 'none';
    visuallyHiddenPopupBackground: boolean = false;

    displayPopup: string = 'none';
    visuallyHiddenPopup: boolean = false;

    constructor(route: ActivatedRoute, @Inject('BASE_URL') baseUrl: string) {
        super(route);
        this.baseUrl = baseUrl;
        this.imageUrlTile01 = this.baseUrl + 'img/tile-cloud.png';
        this.imageUrlTile02 = this.baseUrl + 'img/tile-cloud-AWS.png';
        this.imageUrlTile03 = this.baseUrl + 'img/oneremains.png';
        this.imageUrlTile04 = this.baseUrl + 'img/trading.jpg';
    }

    onClickProject01() {
        this.displayPopupBackground = 'initial';
        this.displayPopup = 'initial';
    }
    onClickProject02() {

    }
    onClickProject03() {

    }
    onClickProject04() {

    }
    onClickProject05() {

    }
    onClickProject06() {

    }

    closePopup() {
        this.visuallyHiddenPopupBackground = true;
        this.visuallyHiddenPopup = true;
    }

    onTransitionEndPopup() {
        if (this.displayPopupBackground == 'initial' && this.visuallyHiddenPopup) {
            this.displayPopupBackground = 'none';
            this.visuallyHiddenPopupBackground = false;
            this.displayPopup = 'none';
            this.visuallyHiddenPopup = false;
        }
    }
}