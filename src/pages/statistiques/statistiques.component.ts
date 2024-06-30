import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-statistiques',
    standalone: true,
    templateUrl: './statistiques.component.html',
    styleUrl: './statistiques.component.css',
    imports: [
        FooterComponent,
        HeaderComponent,
        RouterLink
    ]
})
export class StatistiquesComponent {

}
