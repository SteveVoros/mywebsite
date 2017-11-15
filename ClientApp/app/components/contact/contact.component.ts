import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
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

  private url = 'http://localhost:5000/api/sendmessage';

  constructor(route: ActivatedRoute, private http: Http, private contactService: ContactService) {
    super(route);
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
          this.contactService.emitMessageResponse('There was a problem while sending your message. Please try again.');
        });
    }
  }
}
