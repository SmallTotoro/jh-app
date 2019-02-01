import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPagePage } from './find-page.page';

describe('FindPagePage', () => {
  let component: FindPagePage;
  let fixture: ComponentFixture<FindPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
