import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkarunaShiftsComponent } from './ikaruna-shifts.component';

describe('IkarunaShiftsComponent', () => {
  let component: IkarunaShiftsComponent;
  let fixture: ComponentFixture<IkarunaShiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkarunaShiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkarunaShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
