import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-agence',
    standalone: true,
    templateUrl: './agence.component.html',
    styleUrl: './agence.component.css',
    imports: [
        ReactiveFormsModule,
        RouterLink,
        FooterComponent,
        HeaderComponent
    ]
})
export class AgenceComponent implements OnInit {
  agenceForm = new FormGroup({
    nom : new FormControl('', Validators.required),
    adresse : new FormControl('', Validators.required),
    
  });

  constructor() {

  }

  ngOnInit(): void {
      
  }

  submitAgenceForm() : void {
    console.log(this.agenceForm.valid);
  }
}
