import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleTaskBtnComponent } from './toggle-task-btn.component';

describe('ToggleTaskBtnComponent', () => {
  let component: ToggleTaskBtnComponent;
  let fixture: ComponentFixture<ToggleTaskBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleTaskBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleTaskBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
