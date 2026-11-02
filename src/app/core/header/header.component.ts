import { CommonModule } from '@angular/common';
import { Component, DestroyRef, DOCUMENT, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Language } from '../../shared/enums/language.enums';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppRoutes } from '../../shared/constants/route-segments';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslatePipe, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private readonly document = inject(DOCUMENT);
  isMenuOpen = false;

  readonly languages = Object.values(Language);
  routes = AppRoutes;

  constructor(public translate: TranslateService) {
    inject(DestroyRef).onDestroy(() => this.setMenuOpen(false));
  }

  switchLanguage(lang: Language) {
    this.translate.use(lang);
  }

  toggleMenu() {
    this.setMenuOpen(!this.isMenuOpen);
  }

  closeMenu() {
    this.setMenuOpen(false);
  }

  get menuIcon(): string {
    return this.isMenuOpen
      ? 'icons/menu-close.svg'
      : 'icons/menu-hamburger.svg';
  }

  private setMenuOpen(open: boolean) {
    this.isMenuOpen = open;
    if (this.isMenuOpen) window.scrollTo(0, 0);
    this.document.body.classList.toggle('no-scroll', open);
  }
}