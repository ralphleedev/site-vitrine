import { Component } from '@angular/core';
import { Principle, PrincipleCardComponent } from '../../../../shared/components/principle-card/principle-card.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-approach',
  imports: [TranslatePipe, PrincipleCardComponent],
  templateUrl: './about-approach.component.html',
  styleUrl: './about-approach.component.css',
})
export class AboutApproachComponent {

  readonly prefix = 'about.approach.'

  protected readonly principles: Principle[] = [
    {
      title: this.prefix + 'principle1.title',
      description: this.prefix + 'principle1.description',
      example: this.prefix + 'principle1.example',
    },
    {
      title: this.prefix + 'principle2.title',
      description: this.prefix + 'principle2.description',
      example: this.prefix + 'principle1.example',
    },
    {
      title: this.prefix + 'principle3.title',
      description: this.prefix + 'principle3.description',
      example: this.prefix + 'principle3.example',
    },
    {
      title: this.prefix + 'principle4.title',
      description: this.prefix + 'principle4.description',
      example: this.prefix + 'principle4.example',
    }
  ]
}
