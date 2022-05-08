import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelferListeComponent } from './helfer-liste.component';

describe('HelferListeComponent', () => {
  let component: HelferListeComponent;
  let fixture: ComponentFixture<HelferListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelferListeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelferListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
