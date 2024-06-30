import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallesClasseComponent } from './salles-classe.component';

describe('SallesClasseComponent', () => {
  let component: SallesClasseComponent;
  let fixture: ComponentFixture<SallesClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SallesClasseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SallesClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
