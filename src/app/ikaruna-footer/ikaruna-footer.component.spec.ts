import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkarunaFooterComponent } from './ikaruna-footer.component';

describe('IkarunaFooterComponent', () => {
  let component: IkarunaFooterComponent;
  let fixture: ComponentFixture<IkarunaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkarunaFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkarunaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
