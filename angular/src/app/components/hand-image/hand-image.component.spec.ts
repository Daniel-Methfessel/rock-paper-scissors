import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandImageComponent } from './hand-image.component';
import { Hand } from '../../game/hand';
import { signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

describe('HandImageComponent', () => {
  let component: HandImageComponent;
  let fixture: ComponentFixture<HandImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        HandImageComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandImageComponent);
    component = fixture.componentInstance;
    component.hand = signal(Hand.Rock)
    component.isPlayer = false
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
