import { getCollection } from 'astro:content';

interface Post {
  number: number;
  title: string;
  content: string;
  frontmatter: any;
}

export async function loadAllPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  
  const allPosts: Post[] = posts
    .map((post: any) => {
      const match = post.id.match(/^(\d+)\.md$/);
      const number = match ? parseInt(match[1]) : 0;
      return {
        number,
        title: post.data.title,
        content: post.body,
        frontmatter: post.data
      };
    })
    .filter((post: Post) => post.number > 0)
    .sort((a: Post, b: Post) => a.number - b.number);

  return allPosts;
} 