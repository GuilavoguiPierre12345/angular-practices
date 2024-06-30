import { Routes } from '@angular/router';
import { CompteClientPageComponent } from '../pages/compte-client-page/compte-client-page.component';
import { AgenceComponent } from '../pages/agence/agence.component';
import { AjouterGerantComponent } from '../pages/ajouter-gerant/ajouter-gerant.component';
import { StatistiquesComponent } from '../pages/statistiques/statistiques.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path : "",
        component: HomePageComponent,
        title : "FINANCE-APP | HOME-PAGE"
    },
    {
        path : "clients",
        component: CompteClientPageComponent,
        title : "FINANCE-APP | CLIENT"
    },
    {
        path : "agences",
        component: AgenceComponent,
        title : "FINANCE-APP | AGENCE"
    },
    {
        path : "gerants",
        component: AjouterGerantComponent,
        title : "FINANCE-APP | GERANT"
    },
    {
        path : "statistiques",
        component: StatistiquesComponent,
        title : "FINANCE-APP | STATISTIQUES"
    },
   
];
