import {compute} from './compute';

describe('compute', () => {
  it('should return 0 for negative number', () => {
    expect(compute(-1)).toBe(0);
  });
  it('should return (input +1) for any positive input', () => {
    expect(compute(1)).toBe(2);
  });

});
