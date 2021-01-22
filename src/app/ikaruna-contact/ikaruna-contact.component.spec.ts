import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkarunaContactComponent } from './ikaruna-contact.component';

describe('IkarunaContactComponent', () => {
  let component: IkarunaContactComponent;
  let fixture: ComponentFixture<IkarunaContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkarunaContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkarunaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
