import {
    Component
} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    displayToasty: string = 'none';
    visuallyHidden: boolean = false;

    openToasty() {
        this.displayToasty = 'initial';
    }

    closeToasty() {
        this.visuallyHidden = true;
    }

    onTransitionEnd() {
        if (this.visuallyHidden) {
            this.displayToasty = 'none';
            this.visuallyHidden = false;
        }
    }
}