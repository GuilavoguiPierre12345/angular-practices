import { Component, signal } from '@angular/core';
import { cardItemDatas,CartType } from './cardItem';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts'
import {MatSelectModule} from '@angular/material/select';
import { ProductionCoursComponent } from "../../components/production-cours/production-cours.component";
import { FicheCoursType } from './ficheCoursType';



type ChartType = {
  value: string;
  label: string;
};

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [
        MatIconModule,
        MatButtonModule,
        MatListModule,
        RouterLink,
        RouterOutlet,
        CanvasJSAngularChartsModule,
        MatSelectModule,
        ProductionCoursComponent
    ]
})



export class DashboardComponent {
  public cardItems  = signal<CartType[]>(cardItemDatas);

  /**
   * production-cours informations
   */
  productionCoursInformations : FicheCoursType[] = [
    {
      nombreFiche: 120,
      typeFicheCours: 'Fiches de cours',
      iconFicheCours: 'book',
    },
    {
      nombreFiche: 10,
      typeFicheCours: 'Exercices',
      iconFicheCours: 'note',
    },
    {
      nombreFiche: 100,
      typeFicheCours: 'Exercices',
      iconFicheCours: 'book',
    },
  ]

  /**
   * cette methode permet de rendre dependant les valeurs du graphique, aux valeurs
   * de production de fiche de cours
   * @returns data : le tableau contenant les valeurs a afficher sur le graphique
   */
  generateDataPointValues() {
    const data :any[] = [];
    this.productionCoursInformations.forEach(info => {
      data.push({label: info.typeFicheCours, y: info.nombreFiche});
    });
    return data;
  }
  

  public chartOptions = {
    title : {
      text : "Statistique de production des fiches de cours",
    },
    data : [
      {
        type : "column",
        dataPoints : this.generateDataPointValues()
      }
    ]
  };
  public chartOptions2 = {
    title : {
      text : "production des fiches de cours",
    },
    data : [
      {
        type : "pie",
        dataPoints : this.generateDataPointValues()
      }
    ]
  };
  
}
