import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFaculteComponent } from './details-faculte.component';

describe('DetailsFaculteComponent', () => {
  let component: DetailsFaculteComponent;
  let fixture: ComponentFixture<DetailsFaculteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsFaculteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsFaculteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
