import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAndCheckInComponent } from './log-and-check-in.component';

describe('LogAndCheckInComponent', () => {
  let component: LogAndCheckInComponent;
  let fixture: ComponentFixture<LogAndCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogAndCheckInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogAndCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
