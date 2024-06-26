import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdherentComponent } from './update-adherent.component';

describe('UpdateAdherentComponent', () => {
  let component: UpdateAdherentComponent;
  let fixture: ComponentFixture<UpdateAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAdherentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
