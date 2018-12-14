/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DvdListComponent } from './dvd-list.component';

describe('DvdListComponent', () => {
  let component: DvdListComponent;
  let fixture: ComponentFixture<DvdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
