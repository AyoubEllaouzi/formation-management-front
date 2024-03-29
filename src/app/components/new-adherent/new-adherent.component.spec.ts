import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdherentComponent } from './new-adherent.component';

describe('NewAdherentComponent', () => {
  let component: NewAdherentComponent;
  let fixture: ComponentFixture<NewAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAdherentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
