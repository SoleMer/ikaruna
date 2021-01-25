import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkarunaApplyShiftComponent } from './ikaruna-apply-shift.component';

describe('IkarunaApplyShiftComponent', () => {
  let component: IkarunaApplyShiftComponent;
  let fixture: ComponentFixture<IkarunaApplyShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkarunaApplyShiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkarunaApplyShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
