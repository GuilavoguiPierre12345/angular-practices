import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CustomSidenavComponent } from "./custom-sidenav/custom-sidenav.component";
import {BreakpointObserver, LayoutModule} from '@angular/cdk/layout';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        CustomSidenavComponent,
        LayoutModule
    ]
})
export class AppComponent {
  breakpointsObserver = inject(BreakpointObserver);
  /** rentre la taille du sidenav dynamique */
  collapsed = signal<boolean>(false);
  sideNavWidth = computed(() => this.collapsed() ? '100px' : '270px');
}
