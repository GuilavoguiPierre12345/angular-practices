import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauPresentationComponent } from './niveau-presentation.component';

describe('NiveauPresentationComponent', () => {
  let component: NiveauPresentationComponent;
  let fixture: ComponentFixture<NiveauPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NiveauPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NiveauPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
