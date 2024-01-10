import { signal } from '@angular/core';
import { Player } from './player';

describe('Player', () => {
  it('should create an instance', () => {
    expect(new Player(signal(0))).toBeTruthy();
  });
});
