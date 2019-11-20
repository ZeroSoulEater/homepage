import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S404Component } from './s404.component';

describe('S404Component', () => {
  let component: S404Component;
  let fixture: ComponentFixture<S404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
