import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheChoiceComponent } from './the-choice.component';

describe('TheChoiceComponent', () => {
  let component: TheChoiceComponent;
  let fixture: ComponentFixture<TheChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheChoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
