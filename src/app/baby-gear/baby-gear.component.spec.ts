import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyGearComponent } from './baby-gear.component';

describe('BabyGearComponent', () => {
  let component: BabyGearComponent;
  let fixture: ComponentFixture<BabyGearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyGearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
