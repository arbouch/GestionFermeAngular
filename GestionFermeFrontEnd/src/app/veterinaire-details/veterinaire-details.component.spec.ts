import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaireDetailsComponent } from './veterinaire-details.component';

describe('VeterinaireDetailsComponent', () => {
  let component: VeterinaireDetailsComponent;
  let fixture: ComponentFixture<VeterinaireDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinaireDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinaireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
