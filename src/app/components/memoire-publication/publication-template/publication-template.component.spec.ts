import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationTemplateComponent } from './publication-template.component';

describe('PublicationTemplateComponent', () => {
  let component: PublicationTemplateComponent;
  let fixture: ComponentFixture<PublicationTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
