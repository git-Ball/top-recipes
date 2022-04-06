import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeLimitedComponent } from './recipe-limited.component';

describe('RecipeLimitedComponent', () => {
  let component: RecipeLimitedComponent;
  let fixture: ComponentFixture<RecipeLimitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeLimitedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeLimitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
