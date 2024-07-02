import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDashComponent } from './front-dash.component';

describe('FrontDashComponent', () => {
  let component: FrontDashComponent;
  let fixture: ComponentFixture<FrontDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
