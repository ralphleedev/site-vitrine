import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleCardComponent } from './principle-card.component';

describe('PrincipleCardComponent', () => {
  let component: PrincipleCardComponent;
  let fixture: ComponentFixture<PrincipleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipleCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrincipleCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
