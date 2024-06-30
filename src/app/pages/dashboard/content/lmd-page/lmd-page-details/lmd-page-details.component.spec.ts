import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmdPageDetailsComponent } from './lmd-page-details.component';

describe('LmdPageDetailsComponent', () => {
  let component: LmdPageDetailsComponent;
  let fixture: ComponentFixture<LmdPageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LmdPageDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LmdPageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
