import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyPhotographsComponent } from './property-photographs.component';

describe('PropertyPhotographsComponent', () => {
  let component: PropertyPhotographsComponent;
  let fixture: ComponentFixture<PropertyPhotographsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyPhotographsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyPhotographsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
