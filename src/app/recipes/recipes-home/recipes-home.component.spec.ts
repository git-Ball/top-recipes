import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesHomeComponent } from './recipes-home.component';

describe('RecipesHomeComponent', () => {
  let component: RecipesHomeComponent;
  let fixture: ComponentFixture<RecipesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
