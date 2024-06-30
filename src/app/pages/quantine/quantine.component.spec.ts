import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantineComponent } from './quantine.component';

describe('QuantineComponent', () => {
  let component: QuantineComponent;
  let fixture: ComponentFixture<QuantineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuantineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
