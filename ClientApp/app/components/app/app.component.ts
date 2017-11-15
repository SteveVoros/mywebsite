import {
    Component
} from '@angular/core';
import { ContactService } from '../services/ContactService';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    displayBackground: string = 'none';
    displayContactToasty: string = 'none';
    displayMessageToasty: string = 'none';
    visuallyHiddenBackground: boolean = false;
    visuallyHiddenContactToasty: boolean = false;
    visuallyHiddenMessageToasty: boolean = false;
    message: string;

    constructor(private contactService: ContactService) {
        contactService.onContactResponse$.subscribe(message => {
            this.openMessageToasty(message);
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

    closeBackground() {

    }
}