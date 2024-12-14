import { Node } from 'unist';
import { visit } from 'unist-util-visit';

function remarkTwitterLinks() {
  return (tree: Node) => {
    visit(tree, 'link', (node: any) => {
      const url = node.url as string;
      
      // Check if the URL is a Twitter link
      if (url.includes('twitter.com')) {
        // Convert this link to a custom node type
        node.type = 'twitterEmbed';
        node.data = {
          hName: 'TwitterEmbed',
          hProperties: {
            url: url,
          },
        };
      }
    });
  };
}

export default remarkTwitterLinks;