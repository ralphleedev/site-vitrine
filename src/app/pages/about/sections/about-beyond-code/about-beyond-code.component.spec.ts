import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBeyondCodeComponent } from './about-beyond-code.component';

describe('AboutBeyondCodeComponent', () => {
  let component: AboutBeyondCodeComponent;
  let fixture: ComponentFixture<AboutBeyondCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutBeyondCodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutBeyondCodeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
