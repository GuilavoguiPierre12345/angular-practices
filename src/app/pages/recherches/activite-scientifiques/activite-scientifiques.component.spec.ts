import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteScientifiquesComponent } from './activite-scientifiques.component';

describe('ActiviteScientifiquesComponent', () => {
  let component: ActiviteScientifiquesComponent;
  let fixture: ComponentFixture<ActiviteScientifiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiviteScientifiquesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiviteScientifiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
