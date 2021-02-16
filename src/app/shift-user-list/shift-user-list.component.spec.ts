import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftUserListComponent } from './shift-user-list.component';

describe('ShiftUserListComponent', () => {
  let component: ShiftUserListComponent;
  let fixture: ComponentFixture<ShiftUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
