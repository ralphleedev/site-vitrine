import { Component } from '@angular/core';
import { LINKS } from '../../shared/constants/links';
import { TranslatePipe } from '@ngx-translate/core';
import { AppRoutes } from '../../shared/constants/route-segments';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  links = LINKS
  routes = AppRoutes
}
