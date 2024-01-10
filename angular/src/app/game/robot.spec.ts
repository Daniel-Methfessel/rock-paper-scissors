import { Robot } from './robot';

describe('Robot', () => {
  it('should create an instance', () => {
    expect(new Robot(20)).toBeTruthy();
  });
});
