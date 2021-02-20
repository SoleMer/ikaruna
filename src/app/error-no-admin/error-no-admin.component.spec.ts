import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNoAdminComponent } from './error-no-admin.component';

describe('ErrorNoAdminComponent', () => {
  let component: ErrorNoAdminComponent;
  let fixture: ComponentFixture<ErrorNoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorNoAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
