/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SematicComponent } from './sematic.component';

describe('SematicComponent', () => {
  let component: SematicComponent;
  let fixture: ComponentFixture<SematicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SematicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
