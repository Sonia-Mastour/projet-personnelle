import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublierAnnoncesComponent } from './publier-annonces.component';

describe('PublierAnnoncesComponent', () => {
  let component: PublierAnnoncesComponent;
  let fixture: ComponentFixture<PublierAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublierAnnoncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublierAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
