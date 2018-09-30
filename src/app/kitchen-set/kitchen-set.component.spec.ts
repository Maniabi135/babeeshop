import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenSetComponent } from './kitchen-set.component';

describe('KitchenSetComponent', () => {
  let component: KitchenSetComponent;
  let fixture: ComponentFixture<KitchenSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
