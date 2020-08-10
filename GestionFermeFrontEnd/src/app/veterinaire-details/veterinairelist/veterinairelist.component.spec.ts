import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinairelistComponent } from './veterinairelist.component';

describe('VeterinairelistComponent', () => {
  let component: VeterinairelistComponent;
  let fixture: ComponentFixture<VeterinairelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinairelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinairelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
