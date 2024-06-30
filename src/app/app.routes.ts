import { Routes } from '@angular/router';
import { AdmissionComponent } from './pages/scolarite/admission/admission.component';
import { DemandeInscriptionComponent } from './pages/scolarite/demande-inscription/demande-inscription.component';
import { InscriptionReinscriptionComponent } from './pages/scolarite/inscription-reinscription/inscription-reinscription.component';
import { OffreBourseComponent } from './pages/scolarite/offre-bourse/offre-bourse.component';
import { PreInscriptionComponent } from './pages/scolarite/pre-inscription/pre-inscription.component';
import { TexteCadresComponent } from './pages/scolarite/texte-cadres/texte-cadres.component';
import { ActiviteScientifiquesComponent } from './pages/recherches/activite-scientifiques/activite-scientifiques.component';
import { ArticlesComponent } from './pages/recherches/articles/articles.component';
import { MemoiresComponent } from './pages/recherches/memoires/memoires.component';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';

export const routes: Routes = [
    /**les routes pour la section scolarite */
    {
        path: "admission",
        component: AdmissionComponent
    },
    {
        path: "demande-inscription",
        component:DemandeInscriptionComponent
    },
    {
        path: "inscription-reinscription",
        component: InscriptionReinscriptionComponent
    },
    {
        path: "offre-bourses",
        component: OffreBourseComponent
    },
    {
        path: "pre-inscription",
        component: PreInscriptionComponent
    },
    {
        path: "textes-cadres",
        component: TexteCadresComponent
    },
    /** les routes pour la section recherche */
    {
        path: "activites-scientifiques",
        component: ActiviteScientifiquesComponent
    },
    {
        path: "articles",
        component: ArticlesComponent
    },
    {
        path: "memoires",
        component: MemoiresComponent
    },
    {
        path: "dynamic-forms",
        component: DynamicFormsComponent
    },

];
