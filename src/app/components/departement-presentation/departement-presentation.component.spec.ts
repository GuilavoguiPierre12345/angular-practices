import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementPresentationComponent } from './departement-presentation.component';

describe('DepartementPresentationComponent', () => {
  let component: DepartementPresentationComponent;
  let fixture: ComponentFixture<DepartementPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartementPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartementPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
