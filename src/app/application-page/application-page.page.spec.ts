import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationPagePage } from './application-page.page';

describe('ApplicationPagePage', () => {
  let component: ApplicationPagePage;
  let fixture: ComponentFixture<ApplicationPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
