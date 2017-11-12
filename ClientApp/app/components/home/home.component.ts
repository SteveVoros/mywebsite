import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoScrollAfterLoading } from '../shared/AutoScrollAfterLoading';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['../shared/shared.css', './home.component.css']
})
export class HomeComponent extends AutoScrollAfterLoading {
    title = {text: ''};
    subtitle = {text: ''};
    textTitle = "Hi, I'm Steven.";
    textSubtitle = 'Welcome to my website.';

    constructor(route: ActivatedRoute) {
        super(route);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngAfterViewInit(): void {
        super.ngAfterViewInit();
        this.startTextAnimation();
    }

    private startTextAnimation() {
        this.typeWriter(this.title, this.textTitle, 0, () => {
            this.typeWriter(this.subtitle, this.textSubtitle, 0, null);
        });
    }

    private typeWriter(bindingObject: any, text: string, i: number, fnCallback: any) {
        if (i < (text.length)) {
            setTimeout(() => {
                bindingObject.text = text.substring(0, i + 1);
            });

            setTimeout(() => {
                this.typeWriter(bindingObject, text, i + 1, fnCallback);
            }, 100);
        }
        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }
}