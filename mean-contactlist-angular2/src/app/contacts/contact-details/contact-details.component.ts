import { Component, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service'


@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})

export class ContactDetailsComponent {
  @Input()
  contact: Contact;

  @Input()
  createHandler: Function;

  @Input()
  updateHandler: Function;

  @Input()
  deleteHandler: Function;

  constructor (private contactService: ContactService) {}

  createContact(contact: Contact) {
    this.contactService.createContact(contact).then((newContact: Contact) => {
      this.createHandler(newContact);
    });
  }

  updateContact(contac: Contact): void {
    this.contactService.updateContact(contact).then((updateContact: Contact) => {
      this.updateHandler(updateContact);
    });
  }

  deleteContact(contacId: String):void {
    this.contactService.deleteContact(contacId).then((deleteContact: String)=> {
      this.deleteHandler(deleteContactId)
    });
  }
}
