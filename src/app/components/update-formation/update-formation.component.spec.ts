import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormationComponent } from './update-formation.component';

describe('UpdateFormationComponent', () => {
  let component: UpdateFormationComponent;
  let fixture: ComponentFixture<UpdateFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
