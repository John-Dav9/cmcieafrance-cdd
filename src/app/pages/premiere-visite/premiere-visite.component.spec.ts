import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiereVisiteComponent } from './premiere-visite.component';

describe('PremiereVisiteComponent', () => {
  let component: PremiereVisiteComponent;
  let fixture: ComponentFixture<PremiereVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiereVisiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremiereVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
