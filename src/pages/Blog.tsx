import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  HeartIcon, 
  ShareIcon, 
  BookmarkIcon,
  ChatBubbleLeftIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid, BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  image: string;
  likes: number;
  comments: number;
}

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  const [showShareModal, setShowShareModal] = useState<number | null>(null);
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'newest' | 'popular'>('newest');

  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with React and TypeScript",
      slug: "getting-started-with-react-typescript",
      excerpt: "Learn how to set up a modern React project with TypeScript and best practices for type safety.",
      content: "Full content here...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      category: "development",
      tags: ["react", "typescript", "web development"],
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/blog/react-typescript.jpg",
      likes: 42,
      comments: 12
    },
    {
      id: 2,
      title: "Building Responsive UIs with Tailwind CSS",
      slug: "responsive-uis-tailwind-css",
      excerpt: "A comprehensive guide to creating beautiful, responsive user interfaces using Tailwind CSS.",
      content: "Full content here...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      category: "design",
      tags: ["tailwind", "css", "responsive design"],
      date: "2024-01-10",
      readTime: "8 min read",
      image: "/blog/tailwind-css.jpg",
      likes: 38,
      comments: 8
    },
    {
      id: 3,
      title: "The Future of Web Development",
      slug: "future-web-development",
      excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
      content: "Full content here...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      category: "technology",
      tags: ["web development", "future tech", "trends"],
      date: "2024-01-05",
      readTime: "6 min read",
      image: "/blog/future-web.jpg",
      likes: 56,
      comments: 15
    },
    {
      id: 4,
      title: "Mastering Next.js 14: A Complete Guide",
      slug: "mastering-nextjs-14",
      excerpt: "Deep dive into Next.js 14 features, including Server Components, App Router, and advanced routing patterns.",
      content: "Full content here...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      category: "development",
      tags: ["nextjs", "react", "server components"],
      date: "2024-01-20",
      readTime: "12 min read",
      image: "/blog/nextjs.jpg",
      likes: 78,
      comments: 23
    },
    {
      id: 5,
      title: "UI/UX Design Principles for Developers",
      slug: "ui-ux-design-principles",
      excerpt: "Essential design principles every developer should know to create better user experiences.",
      content: "Full content here...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      category: "design",
      tags: ["ui", "ux", "design principles"],
      date: "2024-01-18",
      readTime: "7 min read",
      image: "/blog/ui-ux.jpg",
      likes: 45,
      comments: 9
    },
    {
      id: 6,
      title: "Building RESTful APIs with Node.js and Express",
      slug: "restful-apis-nodejs-express",
      excerpt: "Learn how to create robust and scalable RESTful APIs using Node.js and Express framework.",
      content: "Full content here...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      category: "development",
      tags: ["nodejs", "express", "api", "backend"],
      date: "2024-01-16",
      readTime: "10 min read",
      image: "/blog/nodejs.jpg",
      likes: 62,
      comments: 18
    },
    {
      id: 7,
      title: "The Rise of AI in Web Development",
      slug: "ai-web-development",
      excerpt: "How artificial intelligence is transforming the way we build and maintain web applications.",
      content: "Full content here...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      category: "technology",
      tags: ["ai", "machine learning", "web development"],
      date: "2024-01-14",
      readTime: "9 min read",
      image: "/blog/ai-web.jpg",
      likes: 89,
      comments: 27
    },
    {
      id: 8,
      title: "Optimizing React Performance",
      slug: "optimizing-react-performance",
      excerpt: "Advanced techniques and best practices for improving React application performance.",
      content: "Full content here...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      category: "development",
      tags: ["react", "performance", "optimization"],
      date: "2024-01-12",
      readTime: "11 min read",
      image: "/blog/react-performance.jpg",
      likes: 71,
      comments: 14
    },
    {
      id: 9,
      title: "Modern CSS Techniques",
      slug: "modern-css-techniques",
      excerpt: "Exploring modern CSS features and techniques for creating stunning web designs.",
      content: "Full content here...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      category: "design",
      tags: ["css", "web design", "frontend"],
      date: "2024-01-10",
      readTime: "8 min read",
      image: "/blog/modern-css.jpg",
      likes: 53,
      comments: 11
    },
    {
      id: 10,
      title: "Web Security Best Practices",
      slug: "web-security-best-practices",
      excerpt: "Essential security practices every web developer should implement to protect their applications.",
      content: "Full content here...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      category: "technology",
      tags: ["security", "web development", "best practices"],
      date: "2024-01-08",
      readTime: "10 min read",
      image: "/blog/web-security.jpg",
      likes: 67,
      comments: 19
    }
  ];

  const categories = ['all', 'development', 'design', 'technology'];

  const filteredPosts = posts
    .filter(post => 
      (selectedCategory === 'all' || post.category === selectedCategory) &&
      (searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    )
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return b.likes - a.likes;
    });

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const toggleSave = (postId: number) => {
    setSavedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const sharePost = (post: BlogPost) => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: `https://yourdomain.com/blog/${post.slug}`
    };

    if (navigator.share) {
      navigator.share(shareData);
    } else {
      setShowShareModal(post.id);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Blog - Sachithra</title>
        <meta name="description" content="Read my latest articles about web development, design, and technology." />
      </Helmet>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Blog</h1>

          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="flex gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'popular')}
                className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
              </select>

              <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                  <div className="relative aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                      className="w-full h-full object-cover"
                />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {post.author.name}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <ClockIcon className="w-4 h-4" />
                          <span>{post.readTime}</span>
                          <span>•</span>
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                  <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => toggleLike(post.id)}
                          className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {likedPosts.includes(post.id) ? (
                            <HeartIconSolid className="w-5 h-5 text-red-500" />
                          ) : (
                            <HeartIcon className="w-5 h-5" />
                          )}
                          <span>{post.likes}</span>
                        </button>
                        <button
                          onClick={() => setExpandedPost(post.id)}
                          className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          <ChatBubbleLeftIcon className="w-5 h-5" />
                          <span>{post.comments}</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleSave(post.id)}
                          className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {savedPosts.includes(post.id) ? (
                            <BookmarkIconSolid className="w-5 h-5" />
                          ) : (
                            <BookmarkIcon className="w-5 h-5" />
                          )}
                        </button>
                        <button
                          onClick={() => sharePost(post)}
                          className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          <ShareIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedPost === post.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                    >
                          <div className="prose dark:prose-invert max-w-none">
                            {post.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Author Bio */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/avatar.jpg"
                    alt="Sachithra"
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Sachithra
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Full Stack Developer & Content Creator
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Passionate about web development, design, and sharing knowledge through writing and content creation.
                </p>
                <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
                  Follow
                </button>
              </div>

              {/* Categories */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors duration-200 ${
                        selectedCategory === category
                          ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="capitalize">{category}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {posts.filter(post => category === 'all' || post.category === category).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(posts.flatMap(post => post.tags))).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Subscribe to Newsletter
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Get the latest articles and news delivered to your inbox.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowShareModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Share Article
              </h3>
              <div className="flex gap-4">
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(posts.find(p => p.id === showShareModal)?.title || '')}&url=${encodeURIComponent(`https://yourdomain.com/blog/${posts.find(p => p.id === showShareModal)?.slug || ''}`)}`)}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Twitter
                </button>
                <button
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yourdomain.com/blog/${posts.find(p => p.id === showShareModal)?.slug || ''}`)}`)}
                  className="flex-1 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
                >
                  LinkedIn
                </button>
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://yourdomain.com/blog/${posts.find(p => p.id === showShareModal)?.slug || ''}`)}`)}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Facebook
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog; 