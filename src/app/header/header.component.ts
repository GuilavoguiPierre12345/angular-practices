import { NgClass,} from '@angular/common';
import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  
  navMenuIsOpen = signal<boolean>(true);
  
  openNavMenu() : void {
    this.navMenuIsOpen.update(()=> !this.navMenuIsOpen());
  }

 
}
