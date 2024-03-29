import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectformationToAdherentComponent } from './affectformation-to-adherent.component';

describe('AffectformationToAdherentComponent', () => {
  let component: AffectformationToAdherentComponent;
  let fixture: ComponentFixture<AffectformationToAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffectformationToAdherentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffectformationToAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
