import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkarunaAboutComponent } from './ikaruna-about.component';

describe('IkarunaAboutComponent', () => {
  let component: IkarunaAboutComponent;
  let fixture: ComponentFixture<IkarunaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkarunaAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkarunaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
