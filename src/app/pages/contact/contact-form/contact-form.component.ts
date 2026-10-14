import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactService } from '../contact.service';
import { ContactConfirmationComponent } from '../contact-confirmation/contact-confirmation.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';
type ContactField = 'name' | 'email' | 'message';

const errorTranlatePrefix = 'contact.form.errors.'

const FALLBACK_ERROR_KEY = errorTranlatePrefix + 'invalid';

const ERROR_KEYS: Record<string, string> = {
  required: errorTranlatePrefix + 'required',
  email: errorTranlatePrefix + 'email',
  minlength: errorTranlatePrefix + 'too-short',
  maxlength: errorTranlatePrefix + 'too-long',
};

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, TranslatePipe, ContactConfirmationComponent, ButtonComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {

  private readonly fb = inject(NonNullableFormBuilder);
  private readonly contactService = inject(ContactService);

  readonly status = signal<SubmitStatus>('idle');

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
    website: [''], // honeypot: real users never see or fill this
  });

  isInvalid(field: ContactField): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || control.dirty);
  }

  errorFor(field: ContactField): string | null {
    const control = this.form.controls[field];
    if (!control.errors || !(control.touched || control.dirty)) {
      return null;
    }

    return ERROR_KEYS[Object.keys(control.errors)[0]] ?? FALLBACK_ERROR_KEY;
  }

  submit(): void {
    if (this.status() === 'sending') {
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { website, ...payload } = this.form.getRawValue();

    // A filled honeypot means a bot: pretend success, send nothing
    if (website) {
      this.status.set('success');
      return;
    }

    this.status.set('sending');

    this.contactService.send(payload).subscribe({
      next: () => {
        this.status.set('success');
        this.form.reset();
      },
      error: () => this.status.set('error'),
    });
  }

  startNewMessage(): void {
    this.status.set('idle');
  }
}
