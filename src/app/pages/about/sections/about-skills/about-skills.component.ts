import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Skill, SkillGroupComponent } from '../../../../shared/components/skill-group/skill-group.component';

@Component({
  selector: 'app-about-skills',
  imports: [TranslatePipe, SkillGroupComponent],
  templateUrl: './about-skills.component.html',
  styleUrl: './about-skills.component.css',
})
export class AboutSkillsComponent {
  protected readonly groups: { title: string; icon:string; skills: Skill[] }[] = [
    {
      title: "about.skills.backend",
      icon: "icons/icone-bdd.svg",
      skills: [
        { name: 'Java', level: 'main' },
        { name: 'Spring Boot', level: 'main' },
        { name: 'REST APIs', level: 'main' },
        { name: 'PostgreSQL', level: 'main' },
        { name: 'Flyway', level: 'main' },
        { name: 'MongoDB', level: 'main' },
      ]
    },
    {
      title: "about.skills.web",
      icon: "icons/icone-desktop.svg",
      skills: [
        { name: 'Angular', level: 'main' },
        { name: 'TypeScript', level: 'main' },
        { name: 'HTML', level: 'main' },
        { name: 'CSS / SCSS', level: 'main' },
        { name: 'RxJS', level: 'main' },
        { name: 'Cypress', level: 'main' },
      ]
    },
    {
      title: "about.skills.mobile",
      icon: "icons/icone-mobile.svg",
      skills: [
        { name: 'Android', level: 'main' },
        { name: 'Java', level: 'main' },
        { name: 'MVVM', level: 'main' },
        { name: 'Room', level: 'main' },
        { name: 'Dagger', level: 'main' },
        { name: 'Zebra RFID SDK', level: 'main' },
      ]
    }
  ];
}
