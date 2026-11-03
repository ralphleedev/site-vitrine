import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIntroComponent } from './about-intro.component';

describe('AboutIntroComponent', () => {
  let component: AboutIntroComponent;
  let fixture: ComponentFixture<AboutIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutIntroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutIntroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
