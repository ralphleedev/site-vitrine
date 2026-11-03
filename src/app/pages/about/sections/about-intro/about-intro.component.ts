import { Component } from '@angular/core';
import { PortraitComponent } from '../../../../shared/components/portrait/portrait.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-intro',
  imports: [PortraitComponent, TranslatePipe],
  templateUrl: './about-intro.component.html',
  styleUrl: './about-intro.component.css',
})
export class AboutIntroComponent { }
