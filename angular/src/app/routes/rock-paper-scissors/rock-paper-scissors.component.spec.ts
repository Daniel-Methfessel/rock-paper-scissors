import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockPaperScissorsComponent } from './rock-paper-scissors.component';
import { TranslateModule } from '@ngx-translate/core';

describe('RockPaperScissorsComponent', () => {
  let component: RockPaperScissorsComponent;
  let fixture: ComponentFixture<RockPaperScissorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        RockPaperScissorsComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RockPaperScissorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
