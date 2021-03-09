import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanActiveAuthComponent } from './can-active-auth.component';

describe('CanActiveAuthComponent', () => {
  let component: CanActiveAuthComponent;
  let fixture: ComponentFixture<CanActiveAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanActiveAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanActiveAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
