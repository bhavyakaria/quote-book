import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteBoardComponent } from './quote-board.component';

describe('QuoteBoardComponent', () => {
  let component: QuoteBoardComponent;
  let fixture: ComponentFixture<QuoteBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
