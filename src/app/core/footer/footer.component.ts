import { Component } from '@angular/core';
import { LINKS } from '../../shared/constants/links';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  links = LINKS
}
