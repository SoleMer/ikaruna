import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkarunaWorkshopsComponent } from './ikaruna-workshops.component';

describe('IkarunaWorkshopsComponent', () => {
  let component: IkarunaWorkshopsComponent;
  let fixture: ComponentFixture<IkarunaWorkshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkarunaWorkshopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkarunaWorkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
