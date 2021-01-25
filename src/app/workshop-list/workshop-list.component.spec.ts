import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopListComponent } from "./WorkshopListComponent";

describe('WorkshopListComponent', () => {
  let component: WorkshopListComponent;
  let fixture: ComponentFixture<WorkshopListComponent>;
z
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
