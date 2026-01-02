import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcesDecouvrirComponent } from './ressources-decouvrir.component';

describe('RessourcesDecouvrirComponent', () => {
  let component: RessourcesDecouvrirComponent;
  let fixture: ComponentFixture<RessourcesDecouvrirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RessourcesDecouvrirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RessourcesDecouvrirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
