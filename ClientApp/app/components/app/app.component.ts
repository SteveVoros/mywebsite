import {
    Component, HostListener, ViewChild, ElementRef, OnInit
} from '@angular/core';
import { ContactService } from '../services/ContactService';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
    visibleContactButtons: string = 'hidden';
    displayBackground: string = 'none';
    displayContactToasty: string = 'none';
    displayMessageToasty: string = 'none';
    visuallyHiddenBackground: boolean = false;
    visuallyHiddenContactToasty: boolean = false;
    visuallyHiddenMessageToasty: boolean = false;
    message: string;

    @ViewChild('content') mainContent: ElementRef;

    constructor(private contactService: ContactService) {
        contactService.onContactResponse$.subscribe(message => {
            this.openMessageToasty(message);
        });
    }

    ngAfterViewInit() {
        let componentPosition = this.mainContent.nativeElement.offsetTop;
        let scrollPosition = window.pageYOffset;

        setTimeout(() => {
            if (scrollPosition >= componentPosition) {
                this.visibleContactButtons = 'initial';
            } else {
                this.visibleContactButtons = 'hidden';
            }
        });
    }

    openContactToasty() {
        this.displayContactToasty = 'initial';
        this.displayBackground = 'initial';
    }

    closeToasty() {
        if (this.displayContactToasty == 'initial')
            this.visuallyHiddenContactToasty = true;
        else
            this.visuallyHiddenMessageToasty = true;
        this.visuallyHiddenBackground = true;
    }

    onTransitionEndContactToasty() {
        if (this.visuallyHiddenContactToasty) {
            this.displayContactToasty = 'none';
            this.displayBackground = 'none';
            this.visuallyHiddenContactToasty = false;
            this.visuallyHiddenBackground = false;
        }
    }

    openMessageToasty(message: string) {
        this.displayMessageToasty = 'initial';
        this.displayBackground = 'initial';
        this.message = message;
    }

    onTransitionEndMessageToasty() {
        if (this.visuallyHiddenMessageToasty) {
            this.displayMessageToasty = 'none';
            this.displayBackground = 'none';
            this.visuallyHiddenMessageToasty = false;
            this.visuallyHiddenBackground = false;
        }
    }

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const componentPosition = this.mainContent.nativeElement.offsetTop;
        const scrollPosition = window.pageYOffset;

        if (scrollPosition >= componentPosition) {
            this.visibleContactButtons = 'initial';
        } else {
            this.visibleContactButtons = 'hidden';
        }
    }
}