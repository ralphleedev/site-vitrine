import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AppRoutes } from '../../../../shared/constants/route-segments';

@Component({
  selector: 'app-about-preview',
  imports: [TranslatePipe, ButtonComponent],
  templateUrl: './about-preview.component.html',
  styleUrl: './about-preview.component.css',
})
export class AboutPreviewComponent {
  routes = AppRoutes
}
