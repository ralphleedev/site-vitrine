import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AppRoutes } from '../../../../shared/constants/route-segments';
import { PortraitComponent } from '../../../../shared/components/portrait/portrait.component';

@Component({
  selector: 'app-about-preview',
  imports: [TranslatePipe, ButtonComponent, PortraitComponent],
  templateUrl: './about-preview.component.html',
  styleUrl: './about-preview.component.css',
})
export class AboutPreviewComponent {
  routes = AppRoutes
}
