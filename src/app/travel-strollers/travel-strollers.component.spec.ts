import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelStrollersComponent } from './travel-strollers.component';

describe('TravelStrollersComponent', () => {
  let component: TravelStrollersComponent;
  let fixture: ComponentFixture<TravelStrollersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelStrollersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelStrollersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
