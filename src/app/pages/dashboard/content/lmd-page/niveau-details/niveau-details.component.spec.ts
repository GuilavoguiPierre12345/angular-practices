import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauDetailsComponent } from './niveau-details.component';

describe('NiveauDetailsComponent', () => {
  let component: NiveauDetailsComponent;
  let fixture: ComponentFixture<NiveauDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NiveauDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NiveauDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
