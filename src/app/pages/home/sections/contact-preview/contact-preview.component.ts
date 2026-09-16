import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AppRoutes } from '../../../../shared/constants/route-segments';

@Component({
  selector: 'app-contact-preview',
  imports: [TranslatePipe, ButtonComponent],
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.css',
})
export class ContactPreviewComponent {
  routes = AppRoutes
}
