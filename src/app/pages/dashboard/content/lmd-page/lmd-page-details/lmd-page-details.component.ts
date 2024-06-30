import { Component } from '@angular/core';
import { ProductionCoursComponent } from "../../../../../components/production-cours/production-cours.component";
import { DepartementPresentationComponent } from "../../../../../components/departement-presentation/departement-presentation.component";
import { NiveauPresentationComponent } from "../../../../../components/niveau-presentation/niveau-presentation.component";

@Component({
    selector: 'app-lmd-page-details',
    standalone: true,
    templateUrl: './lmd-page-details.component.html',
    styleUrl: './lmd-page-details.component.css',
    imports: [ProductionCoursComponent, DepartementPresentationComponent, NiveauPresentationComponent]
})
export class LmdPageDetailsComponent {
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

  /**
   * les informations pour la presentation des niveaux
   */
  public niveauPresentation = [
    {
        niveau : "Licence 1",
        route : "niveau",
      },
      {
        niveau : "Licence 2",
        route : "niveau",
      },
      {
        niveau : "License 3",
        route : "niveau",
      },
      {
        niveau : "License 4",
        route : "niveau",
      },
  ];


}
