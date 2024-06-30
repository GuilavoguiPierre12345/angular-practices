import { Component, Input } from '@angular/core';
import {RoundProgressComponent} from 'angular-svg-round-progressbar';

@Component({
  selector: 'app-progression-cours',
  standalone: true,
  imports: [RoundProgressComponent,],
  templateUrl: './progression-cours.component.html',
  styleUrl: './progression-cours.component.css'
})
export class ProgressionCoursComponent {
  /**valeur d'entre : progressionCours */
  @Input() progressionCours:any[] = [];

}
