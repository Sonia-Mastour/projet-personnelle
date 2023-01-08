import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublierOffresComponent } from './publier-offres.component';

describe('PublierOffresComponent', () => {
  let component: PublierOffresComponent;
  let fixture: ComponentFixture<PublierOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublierOffresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublierOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
