import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-licence-item',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatDividerModule,
    

  ],
  templateUrl: './licence-item.component.html',
  styleUrl: './licence-item.component.css'
})
export class LicenceItemComponent {
  @Input() departements : any[] = [];

}
