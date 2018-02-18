import {VoteComponent} from './vote.component';

// The vote requirements currently allow totalVotes to be negative.
// If voting was positive only another test would be
// required to verify voting could not decrease below 0
// The current downVote test would need to make sure a downVote subtracts a vote.

describe('VoteComponent', () => {
  let component: VoteComponent;
  // AAA (arrange, act, assert)
  // beforeEach executes once before each test
  // This reduces duplication in tests
  beforeEach(() => {
    component = new VoteComponent();  // Arrange
  });

  it('should increment totalVotes when upvoted', () => {
    component.upVote();  // Act
    expect(component.totalVotes).toBe(1); // Assert
  });

  it('should decrement totalVotes when downvoted', () => {
    component.downVote(); // Act
    expect(component.totalVotes).toBe(-1); // Asset
  });

});
