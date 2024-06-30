import { Component } from '@angular/core';
import { ProductionCoursComponent } from "../../../../../components/production-cours/production-cours.component";
import { ProgressionCoursComponent } from "../../../../../components/progression-cours/progression-cours.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-matiere-details',
    standalone: true,
    templateUrl: './matiere-details.component.html',
    styleUrl: './matiere-details.component.css',
    imports: [ProductionCoursComponent, ProgressionCoursComponent, RouterLink]
})

export class MatiereDetailsComponent {
    public productionCoursInformations = [
        {
          nombreFiche: 1,
          typeFicheCours: 'Fiches de cours',
          iconFicheCours: 'book',
        },
        {
          nombreFiche: 2,
          typeFicheCours: 'Exercices',
          iconFicheCours: 'note',
        },
        {
          nombreFiche: 7,
          typeFicheCours: 'Exercices',
          iconFicheCours: 'book',
        },
        {
          nombreFiche: 3,
          typeFicheCours: 'PDF & PPT',
          iconFicheCours: 'book',
        },
      ];

      public progressionCours = [
        {
          typeProgression : "Planifies (Qte)",
          nombreDeCours : 10,
          icon : "bi bi-calendar",
          color:'text-warning',
        },
        {
          typeProgression : "Executes (Qte)",
          nombreDeCours : 0,
          icon : "bi bi-check2-square",
          color:"text-success",
        },
        {
          typeProgression : "Planifies(hr)",
          nombreDeCours : 4,
          icon : "bi bi-calendar",
          color:'text-warning',
        },
        {
          typeProgression : "Executes (hr)",
          nombreDeCours : 3,
          icon : "bi bi-check2-square",
          color:'text-success',
        },
      ]
}
