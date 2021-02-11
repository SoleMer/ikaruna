import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTherapyComponent } from './add-edit-therapy.component';

describe('AddEditTherapyComponent', () => {
  let component: AddEditTherapyComponent;
  let fixture: ComponentFixture<AddEditTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTherapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
