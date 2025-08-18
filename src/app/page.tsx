import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostList from '@/components/PostList';
import { getAllPosts } from '@/lib/posts';
import GoBackButton from '@/components/GoBackButton'

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
     <GoBackButton />   
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10 mt-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring web development, programming, and technology through thoughtful articles and tutorials.
          </p>
        </div>        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Latest Posts
          </h2>
          <PostList posts={posts} />
        </div>
      </main> 
      <Footer />
    </div>
  );
}
