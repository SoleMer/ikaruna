import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkarunaLoginComponent } from './ikaruna-login.component';

describe('IkarunaLoginComponent', () => {
  let component: IkarunaLoginComponent;
  let fixture: ComponentFixture<IkarunaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkarunaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkarunaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
