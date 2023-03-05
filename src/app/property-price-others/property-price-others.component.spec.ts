import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyPriceOthersComponent } from './property-price-others.component';

describe('PropertyPriceOthersComponent', () => {
  let component: PropertyPriceOthersComponent;
  let fixture: ComponentFixture<PropertyPriceOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyPriceOthersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyPriceOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
