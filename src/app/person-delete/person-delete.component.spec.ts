import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDeleteComponent } from './person-delete.component';

describe('PersonDeleteComponent', () => {
  let component: PersonDeleteComponent;
  let fixture: ComponentFixture<PersonDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonDeleteComponent]
    });
    fixture = TestBed.createComponent(PersonDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
