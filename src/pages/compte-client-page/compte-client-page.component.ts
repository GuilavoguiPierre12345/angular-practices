import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-compte-client-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './compte-client-page.component.html',
  styleUrl: './compte-client-page.component.css'
})
export class CompteClientPageComponent {

  clientCompteForm = new FormGroup({
    nom : new FormControl('', Validators.required),
    prenom : new FormControl('', Validators.required),
    telephone : new FormControl('', Validators.required),
    typec : new FormControl('', Validators.required),
    solde : new FormControl(0, Validators.required),
    genre : new FormControl('', Validators.required),
    agence : new FormControl('', Validators.required)
  });
}
