import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSearchListComponent } from './recipe-search-list.component';

describe('RecipeSearchListComponent', () => {
  let component: RecipeSearchListComponent;
  let fixture: ComponentFixture<RecipeSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeSearchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
