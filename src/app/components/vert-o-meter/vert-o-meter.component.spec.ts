import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertOMeterComponent } from './vert-o-meter.component';

describe('VertOMeterComponent', () => {
  let component: VertOMeterComponent;
  let fixture: ComponentFixture<VertOMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertOMeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VertOMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
