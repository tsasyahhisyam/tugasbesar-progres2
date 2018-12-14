/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DvdEditComponent } from './dvd-edit.component';

describe('DvdEditComponent', () => {
  let component: DvdEditComponent;
  let fixture: ComponentFixture<DvdEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvdEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
