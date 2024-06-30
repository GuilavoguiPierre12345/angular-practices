import { Component } from '@angular/core';
import { PublicationTemplateComponent } from "./publication-template/publication-template.component";

@Component({
    selector: 'app-memoire-publication',
    standalone: true,
    templateUrl: './memoire-publication.component.html',
    styleUrl: './memoire-publication.component.css',
    imports: [PublicationTemplateComponent]
})
export class MemoirePublicationComponent {
    public publicationMemoire = [
        {
            title : "Licence",
            color: "text-primary",
            pourcentage :10
        },
        {
            title : "Master",
            color: "text-warning",
            pourcentage :0
        },
        {
            title : "Theses",
            color : "text-danger",
            pourcentage :20
        },
        {
            title : "Publications",
            color : "text-success",
            pourcentage :100
        },
    ];
}
