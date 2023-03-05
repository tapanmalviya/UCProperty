import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPropertyInfoComponent } from './basic-property-info.component';

describe('BasicPropertyInfoComponent', () => {
  let component: BasicPropertyInfoComponent;
  let fixture: ComponentFixture<BasicPropertyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicPropertyInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicPropertyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
