import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignement2Component } from './assignement2.component';

describe('Assignement2Component', () => {
  let component: Assignement2Component;
  let fixture: ComponentFixture<Assignement2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignement2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
