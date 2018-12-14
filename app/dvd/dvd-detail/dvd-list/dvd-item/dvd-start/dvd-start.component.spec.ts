/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DvdStartComponent } from './dvd-start.component';

describe('DvdStartComponent', () => {
  let component: DvdStartComponent;
  let fixture: ComponentFixture<DvdStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvdStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
