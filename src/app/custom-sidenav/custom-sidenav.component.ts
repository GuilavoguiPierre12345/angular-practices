import { Component, Input, computed, signal } from '@angular/core';
import { MenuItem, menuItemsData,MenuItemSectionType } from './menuItem';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    RouterLink,
    RouterLinkActive,
    
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})

export class CustomSidenavComponent {
  sideNavCollapsed = signal<boolean>(false);
  
  @Input() set collapsed(val:boolean) {
    this.sideNavCollapsed.set(val); 
  }
  profilePicSize = computed(() => this.sideNavCollapsed()? '40px' : '100px');

  public menuItems = signal<MenuItem[]>(menuItemsData);
  public menuType = MenuItemSectionType;




}
