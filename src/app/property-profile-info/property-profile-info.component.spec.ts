import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyProfileInfoComponent } from './property-profile-info.component';

describe('PropertyProfileInfoComponent', () => {
  let component: PropertyProfileInfoComponent;
  let fixture: ComponentFixture<PropertyProfileInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyProfileInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
