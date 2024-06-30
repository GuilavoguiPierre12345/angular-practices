import { Component } from '@angular/core';
import { Navbar, navbarItem } from './navbarItem';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  customNavBarItems : Array<Navbar> = navbarItem;

}
