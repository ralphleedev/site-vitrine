import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

export interface Skill {
  name: string;
  level?: 'main' | 'secondary';
  detail?: string;
  logo?: string;
  // TODO : projects
}

@Component({
  selector: 'app-skill-group',
  imports: [TranslatePipe],
  templateUrl: './skill-group.component.html',
  styleUrl: './skill-group.component.css',
})
export class SkillGroupComponent {
  title = input.required<string>();
  icon = input.required<string>();
  skills = input.required<Skill[]>();
}
