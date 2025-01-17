import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRestaurantModalComponent } from './edit-restaurant-modal.component';

describe('EditRestaurantModalComponent', () => {
  let component: EditRestaurantModalComponent;
  let fixture: ComponentFixture<EditRestaurantModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRestaurantModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditRestaurantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
