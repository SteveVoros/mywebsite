import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    linkedinPicUrl: string;
    twitterPicUrl: string;
    emailPicUrl: string;
    baseUrl: string;
    profilePicUrl: string;

    constructor( private route: ActivatedRoute, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
        this.profilePicUrl = this.baseUrl + 'img/profile_pic.jpg';
        this.emailPicUrl = this.baseUrl + 'img/social_email.svg';
        this.twitterPicUrl = this.baseUrl + 'img/social_twitter.svg';
        this.linkedinPicUrl = this.baseUrl + 'img/social_linkedin.svg';
    }

    onAnchorClick() {
        this.route.fragment.subscribe(f => {
            const element = document.querySelector('#' + f);
            if (element)
                element.scrollIntoView({behavior: 'smooth'});
        });
    }
}
