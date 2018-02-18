import {getCrops} from './getCrops';

describe('getCrops', () => {

  // Tests should adapt to changes, not be so rigid
  // to break easily and require fixing of tests.
  // More tests that test one thing better than a single tests
  // that breaks

  // Test to make sure supported crops are returned and no others
  // using toContains and not order i.e. getCrops()[0] === 'Wheat'
  it ('should return the supported crops', () => {
    expect(getCrops()).toContain('Wheat');
    expect(getCrops()).toContain('Soybean');
    expect(getCrops()).toContain('Corn');
    expect(getCrops()).toContain('Potato');
    expect(getCrops().length).toBe(4);
  });

  // This tests just tests the order of crops.
  // Written so as more crops are supported, the test still passes
  it ('crops should be in sorted order', () => {
    expect(getCrops().sort()).toEqual(getCrops());
  })

});
