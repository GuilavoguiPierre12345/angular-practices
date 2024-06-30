import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimestreDescriptionComponent } from './trimestre-description.component';

describe('TrimestreDescriptionComponent', () => {
  let component: TrimestreDescriptionComponent;
  let fixture: ComponentFixture<TrimestreDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrimestreDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrimestreDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
