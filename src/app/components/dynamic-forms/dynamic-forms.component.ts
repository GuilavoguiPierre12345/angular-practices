import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,/**permettre l'utilisation des forms reactive */

  ],
  templateUrl: './dynamic-forms.component.html',
  styleUrl: './dynamic-forms.component.css'
})
export class DynamicFormsComponent {
  constructor(private fb : FormBuilder){} /**FormBuilder est un service qui permet la generation automatique du formulaire */

  dynamicFormGroup! : FormGroup; /**formGroup control un groupe de champ de saisi */

  ngOnInit() {
    this.dynamicFormGroup = this.fb.group({
      
    });
  }

}
