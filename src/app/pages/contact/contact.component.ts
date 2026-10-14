import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
