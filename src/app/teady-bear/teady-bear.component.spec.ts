import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeadyBearComponent } from './teady-bear.component';

describe('TeadyBearComponent', () => {
  let component: TeadyBearComponent;
  let fixture: ComponentFixture<TeadyBearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeadyBearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeadyBearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
