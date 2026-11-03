import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AppRoutes } from '../../../../shared/constants/route-segments';

@Component({
  selector: 'app-about-contact',
  imports: [TranslatePipe, ButtonComponent],
  templateUrl: './about-contact.component.html',
  styleUrl: './about-contact.component.css',
})
export class AboutContactComponent {
  routes = AppRoutes
}
