import { Routes } from "@angular/router";
import { LmdPageComponent } from "./content/lmd-page/lmd-page.component";
import { DocumentationComponent } from "./content/documentation/documentation.component";
import { AdministrationComponent } from "./content/administration/administration.component";
import { RechercheComponent } from "./content/recherche/recherche.component";
import { InfrastructureComponent } from "./content/infrastructure/infrastructure.component";
import { DashboardComponent } from "./dashboard.component";
import { LmdPageDetailsComponent } from "./content/lmd-page/lmd-page-details/lmd-page-details.component";
import { NiveauDetailsComponent } from "./content/lmd-page/niveau-details/niveau-details.component";
import { MatiereDetailsComponent } from "./content/lmd-page/matiere-details/matiere-details.component";
import { FicheCoursComponent } from "../matiere-composant/fiche-cours/fiche-cours.component";
import { ExercicesComponent } from "../matiere-composant/exercices/exercices.component";
import { CalendriersComponent } from "../matiere-composant/calendriers/calendriers.component";
import { EvaluationsComponent } from "../matiere-composant/evaluations/evaluations.component";
import { EspaceEnseignantComponent } from "../matiere-composant/espace-enseignant/espace-enseignant.component";
import { PlanCoursComponent } from "../matiere-composant/plan-cours/plan-cours.component";

export const dashboardRoutes:Routes = [
    /**la route par defaut i-e si aucune url n'est defini il y a une redirection vers
     * le dashboard
     */
    {
        path: "",
        pathMatch:"full",
        redirectTo: "dashboard",
    },
    {
        path: "dashboard",
        component: DashboardComponent,
    },
    {
        path:"dashboard",
        children : [
            {
                path: "lmd/:label",
                component: LmdPageComponent
            },
            {
                path: "lmd/:label",
                children : [
                    {
                        path :"details/:shortcut",
                        component: LmdPageDetailsComponent
                    },
                    {
                        path :"details/:shortcut",
                        children: [
                            {
                                path: "niveau/:niveau",
                                component : NiveauDetailsComponent
                            },
                            {
                                path : "niveau/:niveau",
                                children: [
                                    {
                                        path: "matiere-details",
                                        component: MatiereDetailsComponent
                                    },
                                    {
                                        path: "matiere-details",
                                        children:[
                                            {
                                                path: 'fiche-cours',
                                                component: FicheCoursComponent
                                            },
                                            {
                                                path: 'exercice',
                                                component: ExercicesComponent
                                            },
                                            {
                                                path: 'calendrier',
                                                component: CalendriersComponent
                                            },
                                            {
                                                path: 'evaluation',
                                                component: EvaluationsComponent
                                            },
                                            {
                                                path: 'espace-enseignant',
                                                component: EspaceEnseignantComponent
                                            },
                                            {
                                                path: 'plan-de-cours',
                                                component: PlanCoursComponent
                                            },
                                        ]
                                    }
                                ]
                            }
                        ]
                    },

                ]
            },
            {
                path: "documentation",
                component: DocumentationComponent
            },
            {
                path: "administration",
                component: AdministrationComponent
            },
            {
                path: "recherche",
                component: RechercheComponent
            },
            {
                path: "infrastructure",
                component: InfrastructureComponent
            },
        ]
    },
    
    
];