import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSerialViewComponent } from './edit-serial-view.component';

describe('EditSerialViewComponent', () => {
  let component: EditSerialViewComponent;
  let fixture: ComponentFixture<EditSerialViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSerialViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSerialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
