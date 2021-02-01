import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkarunaSectionComponent } from './ikaruna-section.component';

describe('IkarunaSectionComponent', () => {
  let component: IkarunaSectionComponent;
  let fixture: ComponentFixture<IkarunaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkarunaSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkarunaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
