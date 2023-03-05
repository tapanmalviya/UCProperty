import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyAmentiesComponent } from './property-amenties.component';

describe('PropertyAmentiesComponent', () => {
  let component: PropertyAmentiesComponent;
  let fixture: ComponentFixture<PropertyAmentiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyAmentiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyAmentiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
