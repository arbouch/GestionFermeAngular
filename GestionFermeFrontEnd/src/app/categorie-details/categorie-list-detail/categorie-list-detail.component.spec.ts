import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieListDetailComponent } from './categorie-list-detail.component';

describe('CategorieListDetailComponent', () => {
  let component: CategorieListDetailComponent;
  let fixture: ComponentFixture<CategorieListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
