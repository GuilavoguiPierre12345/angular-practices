import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheCoursComponent } from './fiche-cours.component';

describe('FicheCoursComponent', () => {
  let component: FicheCoursComponent;
  let fixture: ComponentFixture<FicheCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheCoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FicheCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
