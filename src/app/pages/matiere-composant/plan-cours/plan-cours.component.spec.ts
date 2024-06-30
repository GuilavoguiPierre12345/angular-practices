import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCoursComponent } from './plan-cours.component';

describe('PlanCoursComponent', () => {
  let component: PlanCoursComponent;
  let fixture: ComponentFixture<PlanCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanCoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
