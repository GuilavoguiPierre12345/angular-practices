import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoirePublicationComponent } from './memoire-publication.component';

describe('MemoirePublicationComponent', () => {
  let component: MemoirePublicationComponent;
  let fixture: ComponentFixture<MemoirePublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoirePublicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemoirePublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
