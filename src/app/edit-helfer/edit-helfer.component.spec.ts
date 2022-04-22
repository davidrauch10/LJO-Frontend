import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHelferComponent } from './edit-helfer.component';

describe('EditHelferComponent', () => {
  let component: EditHelferComponent;
  let fixture: ComponentFixture<EditHelferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHelferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHelferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
