import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinairedetailComponent } from './veterinairedetail.component';

describe('VeterinairedetailComponent', () => {
  let component: VeterinairedetailComponent;
  let fixture: ComponentFixture<VeterinairedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinairedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinairedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
