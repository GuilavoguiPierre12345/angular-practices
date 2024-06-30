import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionCoursComponent } from './production-cours.component';

describe('ProductionCoursComponent', () => {
  let component: ProductionCoursComponent;
  let fixture: ComponentFixture<ProductionCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductionCoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductionCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
