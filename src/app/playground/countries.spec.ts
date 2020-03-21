import {countries} from './countries';

describe('countries', () => {
  it('should contain countries codes', () => {
    const result = countries();
    expect(result).toContain('IL');
    expect(result).toContain('GB');
    expect(result).toContain('CA');
    expect(result).toContain('AU');
  });
});
