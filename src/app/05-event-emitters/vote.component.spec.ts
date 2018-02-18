import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totalVotes = null;
    // subscribe to voteChanged event
    component.voteChanged.subscribe(tv => totalVotes = tv);
    component.upVote(); // Act
    // Check value in local variable set based on local subscription
    expect(totalVotes).toBe(1);
  });
});
