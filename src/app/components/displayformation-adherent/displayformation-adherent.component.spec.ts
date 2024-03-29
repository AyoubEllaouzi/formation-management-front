import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayformationAdherentComponent } from './displayformation-adherent.component';

describe('DisplayformationAdherentComponent', () => {
  let component: DisplayformationAdherentComponent;
  let fixture: ComponentFixture<DisplayformationAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayformationAdherentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayformationAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
