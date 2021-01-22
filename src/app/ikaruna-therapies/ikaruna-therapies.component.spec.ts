import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkarunaTherapiesComponent } from './ikaruna-therapies.component';

describe('IkarunaTherapiesComponent', () => {
  let component: IkarunaTherapiesComponent;
  let fixture: ComponentFixture<IkarunaTherapiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkarunaTherapiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkarunaTherapiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
