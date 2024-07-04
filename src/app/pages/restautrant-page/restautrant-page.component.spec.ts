import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestautrantPageComponent } from './restautrant-page.component';

describe('RestautrantPageComponent', () => {
  let component: RestautrantPageComponent;
  let fixture: ComponentFixture<RestautrantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestautrantPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestautrantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
