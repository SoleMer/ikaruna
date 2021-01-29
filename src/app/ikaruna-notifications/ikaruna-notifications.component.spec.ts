import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkarunaNotificationsComponent } from './ikaruna-notifications.component';

describe('IkarunaNotificationsComponent', () => {
  let component: IkarunaNotificationsComponent;
  let fixture: ComponentFixture<IkarunaNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkarunaNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkarunaNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
