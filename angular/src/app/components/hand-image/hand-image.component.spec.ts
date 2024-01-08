import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandImageComponent } from './hand-image.component';

describe('HandImageComponent', () => {
  let component: HandImageComponent;
  let fixture: ComponentFixture<HandImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
