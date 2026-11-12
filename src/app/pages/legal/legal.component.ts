import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-legal',
  imports: [TranslatePipe],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.css',
})
export class LegalComponent { }
