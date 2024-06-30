import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaculteItemComponent } from './faculte-item.component';

describe('FaculteItemComponent', () => {
  let component: FaculteItemComponent;
  let fixture: ComponentFixture<FaculteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaculteItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaculteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
