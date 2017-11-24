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

    displayPopup01: string = 'none';
    displayPopup02: string = 'none';
    displayPopup03: string = 'none';
    displayPopup04: string = 'none';
    displayPopup05: string = 'none';
    displayPopup06: string = 'none';
    visuallyHiddenPopup01: boolean = false;
    visuallyHiddenPopup02: boolean = false;
    visuallyHiddenPopup03: boolean = false;
    visuallyHiddenPopup04: boolean = false;
    visuallyHiddenPopup05: boolean = false;
    visuallyHiddenPopup06: boolean = false;

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
        this.displayPopup01 = 'initial';
    }
    onClickProject02() {
        this.displayPopupBackground = 'initial';
        this.displayPopup02 = 'initial';
    }
    onClickProject03() {
        this.displayPopupBackground = 'initial';
        this.displayPopup03 = 'initial';
    }
    onClickProject04() {
        this.displayPopupBackground = 'initial';
        this.displayPopup04 = 'initial';
    }
    onClickProject05() {
        this.displayPopupBackground = 'initial';
        this.displayPopup05 = 'initial';
    }
    onClickProject06() {
        this.displayPopupBackground = 'initial';
        this.displayPopup06 = 'initial';
    }

    closePopup() {
        this.visuallyHiddenPopupBackground = true;
        if (this.displayPopup01 == 'initial')
            this.visuallyHiddenPopup01 = true;
        else if (this.displayPopup02 == 'initial')
            this.visuallyHiddenPopup02 = true;
        else if (this.displayPopup03 == 'initial')
            this.visuallyHiddenPopup03 = true;
        else if (this.displayPopup04 == 'initial')
            this.visuallyHiddenPopup04 = true;
        else if (this.displayPopup05 == 'initial')
            this.visuallyHiddenPopup05 = true;
        else if (this.displayPopup06 == 'initial')
            this.visuallyHiddenPopup06 = true;
    }

    onTransitionEndPopup() {
        if (this.visuallyHiddenPopup01 || this.visuallyHiddenPopup02
            || this.visuallyHiddenPopup03 || this.visuallyHiddenPopup04
            || this.visuallyHiddenPopup05 || this.visuallyHiddenPopup06) {
            this.displayPopup01 = 'none';
            this.displayPopup02 = 'none';
            this.displayPopup03 = 'none';
            this.displayPopup04 = 'none';
            this.displayPopup05 = 'none';
            this.displayPopup06 = 'none';
            this.visuallyHiddenPopup01 = false;
            this.visuallyHiddenPopup02 = false;
            this.visuallyHiddenPopup03 = false;
            this.visuallyHiddenPopup04 = false;
            this.visuallyHiddenPopup05 = false;
            this.visuallyHiddenPopup06 = false;
            this.displayPopupBackground = 'none';
            this.visuallyHiddenPopupBackground = false;
        }
    }
}