import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Language } from '../../shared/enums/language.enums';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslatePipe, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  readonly languages = Object.values(Language);

  isMenuOpen = false;

  constructor(public translate: TranslateService) { }

  switchLanguage(lang: Language) {
    this.translate.use(lang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  get menuIcon(): string {
    return this.isMenuOpen
      ? 'icons/menu-close.svg'
      : 'icons/menu-hamburger.svg';
  }
}

