import { afterNextRender, Component, ElementRef, output, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-confirmation',
  imports: [TranslatePipe],
  templateUrl: './contact-confirmation.component.html',
  styleUrl: './contact-confirmation.component.css',
})
export class ContactConfirmationComponent {

  readonly newMessage = output<void>();

  private readonly title = viewChild.required<ElementRef<HTMLElement>>('title');

  constructor() {
    afterNextRender(() => this.title().nativeElement.focus());
  }
}
