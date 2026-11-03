import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutApproachComponent } from './about-approach.component';

describe('AboutApproachComponent', () => {
  let component: AboutApproachComponent;
  let fixture: ComponentFixture<AboutApproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutApproachComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutApproachComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
