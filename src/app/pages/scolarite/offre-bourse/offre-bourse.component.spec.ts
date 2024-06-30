import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreBourseComponent } from './offre-bourse.component';

describe('OffreBourseComponent', () => {
  let component: OffreBourseComponent;
  let fixture: ComponentFixture<OffreBourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffreBourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffreBourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
