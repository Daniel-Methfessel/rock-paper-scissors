import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHandComponent } from './player-hand.component';
import { Player } from '../../game/player';
import { signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

describe('PlayerHandComponent', () => {
  let component: PlayerHandComponent;
  let fixture: ComponentFixture<PlayerHandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        PlayerHandComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerHandComponent);
    component = fixture.componentInstance;
    component.player = new Player(signal(0))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
