import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Language } from './shared/enums/language.enums';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = signal('site-vitrine');

  constructor(private translate: TranslateService) {
    this.translate.setFallbackLang(Language.EN);
    this.translate.use(Language.EN);
  }
}
