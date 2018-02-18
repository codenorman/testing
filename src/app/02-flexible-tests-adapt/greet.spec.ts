import {greet} from './greet';

describe('greet', () => {

  // The following test verifies the name is in the message
  // It does not check the rest of the message
  it('should include the name in the message', () => {
    expect(greet('Brian')).toContain('Brian');
  });

});
