import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ContactService {
    // Observable string sources
    private contactResponseSource = new Subject<string>();
    // Observable string streams
    onContactResponse$ = this.contactResponseSource.asObservable();
    // Service message commands
    emitMessageResponse(messageToDisplay: string) {
        this.contactResponseSource.next(messageToDisplay);
    }
}