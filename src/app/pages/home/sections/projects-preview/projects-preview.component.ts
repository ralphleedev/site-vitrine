import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AppRoutes } from '../../../../shared/constants/route-segments';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-preview',
  imports: [ButtonComponent, TranslatePipe],
  templateUrl: './projects-preview.component.html',
  styleUrl: './projects-preview.component.css',
})
export class ProjectsPreviewComponent {
  routes = AppRoutes
}
