import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-niveau-presentation',
  standalone: true,
  imports: [
    MatIconModule,
    MatCardModule,
    RouterLink,
  ],
  templateUrl: './niveau-presentation.component.html',
  styleUrl: './niveau-presentation.component.css'
})
export class NiveauPresentationComponent {
  @Input() niveauPresentation : any[] = [];


}
