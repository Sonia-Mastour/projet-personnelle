import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublierProduitsNeufsComponent } from './publier-produits-neufs.component';

describe('PublierProduitsNeufsComponent', () => {
  let component: PublierProduitsNeufsComponent;
  let fixture: ComponentFixture<PublierProduitsNeufsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublierProduitsNeufsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublierProduitsNeufsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
