import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialsViewComponent } from './serials-view.component';

describe('SerialsViewComponent', () => {
  let component: SerialsViewComponent;
  let fixture: ComponentFixture<SerialsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
