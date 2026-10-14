import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  private readonly http = inject(HttpClient);
  private readonly endpoint = 'https://formspree.io/f/mzezwblw';

  send(message: ContactMessage): Observable<unknown> {
    return this.http.post(this.endpoint, message, {
      headers: { Accept: 'application/json' },
    });
  }
}
