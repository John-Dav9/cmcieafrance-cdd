import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistereEnfantsComponent } from './ministere-enfants.component';

describe('MinistereEnfantsComponent', () => {
  let component: MinistereEnfantsComponent;
  let fixture: ComponentFixture<MinistereEnfantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinistereEnfantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinistereEnfantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
