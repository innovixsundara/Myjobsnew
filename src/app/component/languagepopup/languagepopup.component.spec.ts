import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagepopupComponent } from './languagepopup.component';

describe('LanguagepopupComponent', () => {
  let component: LanguagepopupComponent;
  let fixture: ComponentFixture<LanguagepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagepopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
