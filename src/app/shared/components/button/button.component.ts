import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoute } from '../../constants/route-segments';
import { NgTemplateOutlet } from '@angular/common';


export type ButtonVariant = 'solid' | 'outline';
export type ButtonColor = 'primary' | 'secondary' | 'white';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  imports: [RouterLink, NgTemplateOutlet],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'solid';
  @Input() color: ButtonColor = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() routerLink?: AppRoute;

  get classes() {
    return `btn btn--${this.variant} btn--${this.color} btn--${this.size}`;
  }
}
