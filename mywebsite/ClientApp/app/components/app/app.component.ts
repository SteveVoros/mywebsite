import {
    Component, HostListener, ViewChild, ElementRef, OnInit, Renderer2
} from '@angular/core';
import { ContactService } from '../services/ContactService';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Title, Meta } from '@angular/platform-browser';

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

    private homePageTitle: string = 'Home Page - Steven Voros';

    @ViewChild('content') mainContent: ElementRef;

    constructor(private contactService: ContactService, private renderer: Renderer2, private titleService: Title, private metadataService: Meta) {
        contactService.onContactResponse$.subscribe(message => {
            this.openMessageToasty(message);
        });

        this.titleService.setTitle(this.homePageTitle);
        this.metadataService.addTag({name: 'author', content: 'Steven Voros'});
        this.metadataService.addTag({name: 'keywords', content: 'Web Development, Software, Software Development, Full-stack, Developer, Consultant, Azure Cloud, Azure, ASP.NET, .NET, .NET Core, Angular'});
        this.metadataService.addTag({name: 'description', content: `Website of Steven Voros. Software developer, full-stack .NET developer specialized in Azure Cloud and Angular.`});
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
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
    }

    closeToasty() {
        if (this.displayContactToasty == 'initial')
            this.visuallyHiddenContactToasty = true;
        else
            this.visuallyHiddenMessageToasty = true;
        this.visuallyHiddenBackground = true;
        this.renderer.setStyle(document.body, 'overflow', 'initial');
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
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
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