import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with React and TypeScript',
      excerpt: 'Learn how to set up a modern React project with TypeScript and best practices.',
      date: '2024-03-15',
      category: 'Development',
      readTime: '5 min read',
      image: '/blog/react-typescript.jpg',
    },
    {
      id: 2,
      title: 'Building Responsive UIs with Tailwind CSS',
      excerpt: 'A comprehensive guide to creating beautiful, responsive interfaces using Tailwind CSS.',
      date: '2024-03-10',
      category: 'Design',
      readTime: '7 min read',
      image: '/blog/tailwind.jpg',
    },
    {
      id: 3,
      title: 'The Future of Web Development',
      excerpt: 'Exploring upcoming trends and technologies in web development.',
      date: '2024-03-05',
      category: 'Technology',
      readTime: '6 min read',
      image: '/blog/future-web.jpg',
    },
  ];

  const categories = ['all', 'Development', 'Design', 'Technology'];

  const filteredPosts = posts.filter(
    (post) => selectedCategory === 'all' || post.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>Blog - Sachithra</title>
        <meta name="description" content="Read my latest articles about web development, design, and technology." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Blog</h1>

          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-primary-600 dark:text-primary-400">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Blog; 