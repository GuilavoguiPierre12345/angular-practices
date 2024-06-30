import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitesScientifiquesComponent } from './activites-scientifiques.component';

describe('ActivitesScientifiquesComponent', () => {
  let component: ActivitesScientifiquesComponent;
  let fixture: ComponentFixture<ActivitesScientifiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitesScientifiquesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivitesScientifiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
