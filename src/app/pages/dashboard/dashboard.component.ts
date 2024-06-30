import { Component } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FaculteItemComponent } from '../../components/faculte-item/faculte-item.component';
import { NzGridModule } from 'ng-zorro-antd/grid';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NzFlexModule,
    NzTypographyModule,
    FaculteItemComponent,
    NzGridModule,


    
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
