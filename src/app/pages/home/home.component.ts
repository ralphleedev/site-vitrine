import { Component } from '@angular/core';
import { IntroComponent } from './sections/intro/intro.component';
import { AboutPreviewComponent } from './sections/about-preview/about-preview.component';
import { ProjectsPreviewComponent } from './sections/projects-preview/projects-preview.component';
import { ContactPreviewComponent } from './sections/contact-preview/contact-preview.component';

@Component({
  selector: 'app-home',
  imports: [IntroComponent, AboutPreviewComponent, ProjectsPreviewComponent, ContactPreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent { }
