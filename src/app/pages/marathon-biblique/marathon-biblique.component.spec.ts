import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathonBibliqueComponent } from './marathon-biblique.component';

describe('MarathonBibliqueComponent', () => {
  let component: MarathonBibliqueComponent;
  let fixture: ComponentFixture<MarathonBibliqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarathonBibliqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarathonBibliqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
