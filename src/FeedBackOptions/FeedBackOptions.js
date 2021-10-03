import React from 'react';

export default function FeedBackOptions(
  { good, neutral, bad },
  onLeaveFeedback,
) {
  <div>
    <button type="button" className="button" onClick={() => onLeaveFeedback()}>
      Good
    </button>
    <button type="button" className="button" onClick={() => onLeaveFeedback()}>
      Neutral
    </button>
    <button type="button" className="button" onClick={() => onLeaveFeedback()}>
      Bad
    </button>
  </div>;
}
