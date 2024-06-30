import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendriersComponent } from './calendriers.component';

describe('CalendriersComponent', () => {
  let component: CalendriersComponent;
  let fixture: ComponentFixture<CalendriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendriersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
