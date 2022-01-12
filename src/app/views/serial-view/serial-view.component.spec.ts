import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialViewComponent } from './serial-view.component';

describe('SerialViewComponent', () => {
  let component: SerialViewComponent;
  let fixture: ComponentFixture<SerialViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
