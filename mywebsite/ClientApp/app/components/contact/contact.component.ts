import { Http } from '@angular/http';
import { Component, OnInit, Inject } from '@angular/core';
import { AutoScrollAfterLoading } from '../shared/AutoScrollAfterLoading';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ContactService } from '../services/ContactService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../shared/shared.css', './contact.component.css']
})
export class ContactComponent extends AutoScrollAfterLoading {
  
  private baseUrl: string;
  private url: string;

  constructor(route: ActivatedRoute, private http: Http, private contactService: ContactService, @Inject('BASE_URL') baseUrl: string) {
    super(route);
    this.baseUrl = baseUrl;
    this.url = this.baseUrl + 'api/sendmessage';
  }

  submit(contactForm: NgForm) {
    if (contactForm.valid) {
      let values = contactForm.value;
      let post = {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message
      };

      this.http.post(this.url, post)
        .subscribe(
        response => {
          console.log('emitting message');
          this.contactService.emitMessageResponse('Your message has been successfully sent.');
        },
        error => {
          this.contactService.emitMessageResponse('There has been a problem while sending your message.');
        });
    }
  }
}
