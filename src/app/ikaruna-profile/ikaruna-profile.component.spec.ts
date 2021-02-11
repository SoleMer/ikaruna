import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkarunaProfileComponent } from './ikaruna-profile.component';

describe('IkarunaProfileComponent', () => {
  let component: IkarunaProfileComponent;
  let fixture: ComponentFixture<IkarunaProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkarunaProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkarunaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
