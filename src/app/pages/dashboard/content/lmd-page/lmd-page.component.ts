import { Component,inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from "@angular/router";
import { ProductionCoursComponent } from "../../../../components/production-cours/production-cours.component";
import { LicenceItemComponent } from "../../../../components/licence-item/licence-item.component";
import { LicenceItemType } from './licenceItemType';
import { ProgressionCoursComponent } from "../../../../components/progression-cours/progression-cours.component";
import { MemoirePublicationComponent } from "../../../../components/memoire-publication/memoire-publication.component";


@Component({
    selector: 'app-lmd-page',
    standalone: true,
    templateUrl: './lmd-page.component.html',
    styleUrl: './lmd-page.component.css',
    imports: [
        MatButtonModule,
        MatIconModule,
        ProductionCoursComponent,
        LicenceItemComponent,
        ProgressionCoursComponent,
        MemoirePublicationComponent
    ]
})
export class LmdPageComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  lmdType;
  constructor(){
    this.lmdType = this.route.snapshot.paramMap.get('label');
  }

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
   * la liste des departements de la licence
  */
  public departements :LicenceItemType[] = [
    {
      departement : "Medecine veterinaire",
      shortcut : "MV",
      route : "details",
    },
    {
      departement : "Peche aquaculture",
      shortcut : "PA",
      route : "details",
    },
    {
      departement : "Technologie",
      shortcut : "TCA",
      route : "details",
    },
    {
      departement : "Laboratoire",
      shortcut : "LABO",
      route : "details",
    },
  ] ;


  /**
   * les informations sur la progression des cours de la licence
  */
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
