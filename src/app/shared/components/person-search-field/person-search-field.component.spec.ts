import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSearchFieldComponent } from './person-search-field.component';

describe('PersonSearchFieldComponent', () => {
  let component: PersonSearchFieldComponent;
  let fixture: ComponentFixture<PersonSearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonSearchFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
