import fs from 'fs';
import path from 'path';
import { Post } from '@/components/PostCard';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.json'))
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const post = JSON.parse(fileContents);
      
      return {
        slug: post.slug,
        title: post.title,
        date: post.date,
        excerpt: generateExcerpt(post.content),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.json`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const post = JSON.parse(fileContents);
  
  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    content: post.content,
  };
}

export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames
    .filter((fileName) => fileName.endsWith('.json'))
    .map((fileName) => fileName.replace(/\.json$/, ''));
}

function generateExcerpt(content: string, maxLength: number = 150): string {
  // Remove markdown formatting for excerpt
  const plainText = content
    .replace(/#{1,6}\s+/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/`(.*?)`/g, '$1') // Remove inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/>\s*(.*)/g, '$1') // Remove blockquotes
    .replace(/^\s*[-*+]\s+/gm, '') // Remove list markers
    .replace(/^\s*\d+\.\s+/gm, '') // Remove numbered list markers
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  return plainText.substring(0, maxLength).trim() + '...';
} 