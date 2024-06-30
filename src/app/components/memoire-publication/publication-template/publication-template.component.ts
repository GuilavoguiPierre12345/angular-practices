import { Component, Input } from '@angular/core';
import {RoundProgressComponent} from 'angular-svg-round-progressbar';

@Component({
  selector: 'app-publication-template',
  standalone: true,
  imports: [
    RoundProgressComponent,

  ],
  templateUrl: './publication-template.component.html',
  styleUrl: './publication-template.component.css'
})
export class PublicationTemplateComponent {
  @Input() publicationMemoire : any[]= [];
}
