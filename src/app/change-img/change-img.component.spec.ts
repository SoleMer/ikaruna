import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeImgComponent } from './change-img.component';

describe('ChangeImgComponent', () => {
  let component: ChangeImgComponent;
  let fixture: ComponentFixture<ChangeImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
