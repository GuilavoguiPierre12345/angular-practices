import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { CustomSideNavComponent } from "./components/custom-side-nav/custom-side-nav.component";




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        NzLayoutModule,
        NzButtonModule,
        NzIconModule,
        NzFlexModule,
        NzDropDownModule,
        CustomSideNavComponent
    ]
})
export class AppComponent{
  
  isSiderCollapsed = signal<boolean>(false);

  isSiderCollapsedChange(value: boolean){
    this.isSiderCollapsed.set(value);
  }
  
}
