import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoiresComponent } from './memoires.component';

describe('MemoiresComponent', () => {
  let component: MemoiresComponent;
  let fixture: ComponentFixture<MemoiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoiresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
