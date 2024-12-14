import React from 'react';
import { Tweet } from 'react-tweet';

interface TwitterEmbedProps {
  url: string;
}

const TwitterEmbed = ({ url }: TwitterEmbedProps) => {
  const tweetIdMatch = url.match(/status\/(\d+)/);
  const tweetId = tweetIdMatch ? tweetIdMatch[1] : null;

  if (!tweetId) {
    return <div>Invalid URL</div>;
  }

  return <Tweet id={tweetId} />;
};

export default TwitterEmbed;