import { ActivatedRoute } from '@angular/router';

export abstract class AutoScrollAfterLoading {
    protected fragment: string;

    constructor(protected route: ActivatedRoute) { }

    ngOnInit() {
        this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    }

    ngAfterViewInit(): void {
        try { // trycatch needed due to bug in Angular (document not found exception)
            const element = document.querySelector('#' + this.fragment);
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        } catch (error) {

        }
    }
}