import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPropertyAddressComponent } from './basic-property-address.component';

describe('BasicPropertyAddressComponent', () => {
  let component: BasicPropertyAddressComponent;
  let fixture: ComponentFixture<BasicPropertyAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicPropertyAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicPropertyAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
