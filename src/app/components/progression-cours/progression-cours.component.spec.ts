import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressionCoursComponent } from './progression-cours.component';

describe('ProgressionCoursComponent', () => {
  let component: ProgressionCoursComponent;
  let fixture: ComponentFixture<ProgressionCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressionCoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressionCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
