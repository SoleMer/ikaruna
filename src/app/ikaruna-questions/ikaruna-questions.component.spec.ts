import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkarunaQuestionsComponent } from './ikaruna-questions.component';

describe('IkarunaQuestionsComponent', () => {
  let component: IkarunaQuestionsComponent;
  let fixture: ComponentFixture<IkarunaQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkarunaQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkarunaQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
