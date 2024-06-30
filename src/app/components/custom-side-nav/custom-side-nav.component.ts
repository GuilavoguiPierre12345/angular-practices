import { Component, Input, signal } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MenuItem, menuItemsData } from './navItem';
import { RouterLink } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';


@Component({
  selector: 'app-custom-side-nav',
  standalone: true,
  imports: [
    NzMenuModule,
    NzButtonModule,
    RouterLink,
    NzIconModule,
    NzFlexModule,
    NzDropDownModule,
    NzToolTipModule,
    

  ],
  templateUrl: './custom-side-nav.component.html',
  styleUrl: './custom-side-nav.component.css'
})
export class CustomSideNavComponent {
  /**la liste des composants de la navigation */
  public menuItems = signal<MenuItem[]>(menuItemsData);

  @Input()
  siderCollapsedStatus = false;
}
