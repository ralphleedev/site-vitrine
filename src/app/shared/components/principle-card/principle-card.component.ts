import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

export interface Principle {
  title: string;
  description: string;
  example: string;
}

@Component({
  selector: 'app-principle-card',
  imports: [TranslatePipe],
  templateUrl: './principle-card.component.html',
  styleUrl: './principle-card.component.css',
})
export class PrincipleCardComponent {
   principle = input.required<Principle>();
}
