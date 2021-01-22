import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkarunaTakeATurnComponent } from './ikaruna-take-a-turn.component';

describe('IkarunaTakeATurnComponent', () => {
  let component: IkarunaTakeATurnComponent;
  let fixture: ComponentFixture<IkarunaTakeATurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkarunaTakeATurnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkarunaTakeATurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
