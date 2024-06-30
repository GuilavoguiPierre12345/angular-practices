import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmdPageComponent } from './lmd-page.component';

describe('LmdPageComponent', () => {
  let component: LmdPageComponent;
  let fixture: ComponentFixture<LmdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LmdPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LmdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
