import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursTelechargerComponent } from './cours-telecharger.component';

describe('CoursTelechargerComponent', () => {
  let component: CoursTelechargerComponent;
  let fixture: ComponentFixture<CoursTelechargerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursTelechargerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursTelechargerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
