import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenceItemComponent } from './licence-item.component';

describe('LicenceItemComponent', () => {
  let component: LicenceItemComponent;
  let fixture: ComponentFixture<LicenceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenceItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LicenceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
