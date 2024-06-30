import { Component } from '@angular/core';
import { ProductionCoursComponent } from "../../../../../components/production-cours/production-cours.component";
import { TrimestreDescriptionComponent } from "../../../../../components/trimestre-description/trimestre-description.component";
import { MatiereDescriptionComponent } from "../../../../../components/matiere-description/matiere-description.component";

@Component({
    selector: 'app-niveau-details',
    standalone: true,
    templateUrl: './niveau-details.component.html',
    styleUrl: './niveau-details.component.css',
    imports: [ProductionCoursComponent, TrimestreDescriptionComponent, MatiereDescriptionComponent]
})
export class NiveauDetailsComponent {
     /**
   * les informations sur la production des cours
   */
  public productionCoursInformations = [
    {
      nombreFiche: 12,
      typeFicheCours: 'Fiches de cours',
      iconFicheCours: 'book',
    },
    {
      nombreFiche: 4,
      typeFicheCours: 'Exercices',
      iconFicheCours: 'note',
    },
    {
      nombreFiche: 10,
      typeFicheCours: 'Exercices',
      iconFicheCours: 'book',
    },
  ];
}
