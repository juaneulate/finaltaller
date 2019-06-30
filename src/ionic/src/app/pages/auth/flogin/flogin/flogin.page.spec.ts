import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloginPage } from './flogin.page';

describe('FloginPage', () => {
  let component: FloginPage;
  let fixture: ComponentFixture<FloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
