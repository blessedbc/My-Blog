// app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPostBySlug } from '@/lib/posts';

type Props = {
  params: { slug: string };
};

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  // Convert markdown content to HTML
  const htmlContent = marked(post.content);
  
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <header className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Blog Post
                </span>
                <time className="text-sm text-gray-500">
                  {formattedDate}
                </time>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>By Admin</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </header>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
