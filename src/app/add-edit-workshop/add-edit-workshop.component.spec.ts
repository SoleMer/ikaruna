import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditWorkshopComponent } from './add-edit-workshop.component';

describe('AddEditWorkshopComponent', () => {
  let component: AddEditWorkshopComponent;
  let fixture: ComponentFixture<AddEditWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditWorkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
