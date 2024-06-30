import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationsExterieurComponent } from './relations-exterieur.component';

describe('RelationsExterieurComponent', () => {
  let component: RelationsExterieurComponent;
  let fixture: ComponentFixture<RelationsExterieurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelationsExterieurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelationsExterieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
