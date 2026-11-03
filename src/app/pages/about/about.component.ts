import { Component } from '@angular/core';
import { AboutIntroComponent } from './sections/about-intro/about-intro.component';
import { AboutSkillsComponent } from './sections/about-skills/about-skills.component';
import { AboutApproachComponent } from './sections/about-approach/about-approach.component';
import { AboutBeyondCodeComponent } from './sections/about-beyond-code/about-beyond-code.component';
import { AboutContactComponent } from './sections/about-contact/about-contact.component';

@Component({
  selector: 'app-about',
  imports: [AboutIntroComponent, AboutSkillsComponent, AboutApproachComponent, AboutBeyondCodeComponent, AboutContactComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent { }