import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    /** les routes pour le tableau de bord */
    {
        path: "",
        pathMatch:"full",
        redirectTo: "dashboard",
    },
    {
        path: "dashboard",
        component: DashboardComponent ,
    },

    /** End dashboard routes */
    

];
