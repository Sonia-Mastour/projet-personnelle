import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduitsNeufsComponent } from './list-produits-neufs.component';

describe('ListProduitsNeufsComponent', () => {
  let component: ListProduitsNeufsComponent;
  let fixture: ComponentFixture<ListProduitsNeufsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProduitsNeufsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProduitsNeufsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
