import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ajouter-gerant',
    standalone: true,
    templateUrl: './ajouter-gerant.component.html',
    styleUrl: './ajouter-gerant.component.css',
    imports: [
        FooterComponent, 
        HeaderComponent,
        ReactiveFormsModule,
        RouterLink
    ]
})
export class AjouterGerantComponent {

    gerantCompteForm = new FormGroup({
        nom : new FormControl('', Validators.required),
        prenom : new FormControl('', Validators.required),
        telephone : new FormControl('', Validators.required),
        genre : new FormControl('', Validators.required),
        agence : new FormControl('', Validators.required)
      });
}
