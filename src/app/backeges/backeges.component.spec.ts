import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackegesComponent } from './backeges.component';

describe('BackegesComponent', () => {
  let component: BackegesComponent;
  let fixture: ComponentFixture<BackegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackegesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
