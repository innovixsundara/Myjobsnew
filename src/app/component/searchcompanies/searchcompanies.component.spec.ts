import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcompaniesComponent } from './searchcompanies.component';

describe('SearchcompaniesComponent', () => {
  let component: SearchcompaniesComponent;
  let fixture: ComponentFixture<SearchcompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchcompaniesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchcompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
