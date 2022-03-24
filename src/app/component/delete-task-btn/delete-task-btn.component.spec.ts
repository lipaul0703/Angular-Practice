import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTaskBtnComponent } from './delete-task-btn.component';

describe('DeleteTaskBtnComponent', () => {
  let component: DeleteTaskBtnComponent;
  let fixture: ComponentFixture<DeleteTaskBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTaskBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTaskBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
