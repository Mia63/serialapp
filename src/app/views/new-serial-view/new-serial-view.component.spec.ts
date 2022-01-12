import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSerialViewComponent } from './new-serial-view.component';

describe('NewSerialViewComponent', () => {
  let component: NewSerialViewComponent;
  let fixture: ComponentFixture<NewSerialViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSerialViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSerialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
