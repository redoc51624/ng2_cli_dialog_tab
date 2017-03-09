import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateSessionComponent } from './rate-session.component';

describe('RateSessionComponent', () => {
  let component: RateSessionComponent;
  let fixture: ComponentFixture<RateSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
