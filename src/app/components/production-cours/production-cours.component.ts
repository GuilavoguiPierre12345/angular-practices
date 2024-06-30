import { Component, Input, } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-production-cours',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './production-cours.component.html',
  styleUrl: './production-cours.component.css',
})
export class ProductionCoursComponent {
  
  @Input() productionDatas:any[]= [];
}
