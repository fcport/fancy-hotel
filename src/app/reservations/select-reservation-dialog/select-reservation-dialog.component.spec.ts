import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectReservationDialogComponent } from './select-reservation-dialog.component';

describe('SelectReservationDialogComponent', () => {
  let component: SelectReservationDialogComponent;
  let fixture: ComponentFixture<SelectReservationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectReservationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectReservationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
