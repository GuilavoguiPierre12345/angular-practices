import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexteCadresComponent } from './texte-cadres.component';

describe('TexteCadresComponent', () => {
  let component: TexteCadresComponent;
  let fixture: ComponentFixture<TexteCadresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TexteCadresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TexteCadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
