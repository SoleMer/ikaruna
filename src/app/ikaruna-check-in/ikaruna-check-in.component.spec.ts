import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkarunaCheckInComponent } from './ikaruna-check-in.component';

describe('IkarunaCheckInComponent', () => {
  let component: IkarunaCheckInComponent;
  let fixture: ComponentFixture<IkarunaCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkarunaCheckInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkarunaCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
