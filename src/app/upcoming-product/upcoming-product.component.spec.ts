import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingProductComponent } from './upcoming-product.component';

describe('UpcomingProductComponent', () => {
  let component: UpcomingProductComponent;
  let fixture: ComponentFixture<UpcomingProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
