import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-faculte-item',
  standalone: true,
  imports: [
    NzFlexModule,
    NzTypographyModule,
    RouterLink,
    NzGridModule,
    NzIconModule,
    



  ],
  templateUrl: './faculte-item.component.html',
  styleUrl: './faculte-item.component.css'
})
export class FaculteItemComponent {

}
