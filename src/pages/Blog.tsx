import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  CalendarIcon,
  ClockIcon,
  ChatBubbleLeftIcon,
  BookmarkIcon,
  ShareIcon,
  HeartIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  FunnelIcon,
  UserIcon,
  TagIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid';

// Import images
import a1 from '../images/a1.jpg';
import a2 from '../images/a2.jpg';
import a3 from '../images/a3.jpg';
import a4 from '../images/a4.jpg';
import a5 from '../images/a5.jpg';
import a6 from '../images/a6.jpg';
import a7 from '../images/a7.jpg';
import a8 from '../images/a8.jpg';
import a9 from '../images/a9.jpg';
import a10 from '../images/a10.jpg';

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

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with React Development",
      slug: "getting-started-with-react-development",
      excerpt: "Learn the fundamentals of React and start building modern web applications.",
      content: "React has revolutionized web development with its component-based architecture...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      date: "2024-03-15",
      readTime: "5 min read",
      category: "Web Development",
      tags: ["React", "JavaScript", "Web Development"],
      image: a1,
      likes: 42,
      comments: 8
    },
    {
      id: 2,
      title: "Mastering TypeScript for Better Code",
      slug: "mastering-typescript-for-better-code",
      excerpt: "Discover how TypeScript can improve your development workflow and code quality.",
      content: "TypeScript adds static typing to JavaScript, making your code more robust...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      date: "2024-03-10",
      readTime: "7 min read",
      category: "Programming",
      tags: ["TypeScript", "JavaScript", "Programming"],
      image: a2,
      likes: 38,
      comments: 12
    },
    {
      id: 3,
      title: "Building Responsive UIs with Tailwind CSS",
      slug: "building-responsive-uis-with-tailwind-css",
      excerpt: "Create beautiful and responsive user interfaces using Tailwind CSS.",
      content: "Tailwind CSS provides a utility-first approach to styling...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      date: "2024-03-05",
      readTime: "6 min read",
      category: "CSS",
      tags: ["Tailwind CSS", "CSS", "Web Design"],
      image: a3,
      likes: 45,
      comments: 15
    },
    {
      id: 4,
      title: "The Future of Web Development",
      slug: "future-of-web-development",
      excerpt: "Explore upcoming trends and technologies in web development.",
      content: "Web development is constantly evolving with new frameworks and tools...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      date: "2024-02-28",
      readTime: "8 min read",
      category: "Technology",
      tags: ["Web Development", "Technology", "Future"],
      image: a4,
      likes: 52,
      comments: 20
    },
    {
      id: 5,
      title: "Optimizing React Performance",
      slug: "optimizing-react-performance",
      excerpt: "Learn techniques to improve the performance of your React applications.",
      content: "Performance optimization is crucial for delivering a great user experience...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      date: "2024-02-20",
      readTime: "9 min read",
      category: "Web Development",
      tags: ["React", "Performance", "Optimization"],
      image: a5,
      likes: 48,
      comments: 18
    },
    {
      id: 6,
      title: "State Management in React",
      slug: "state-management-in-react",
      excerpt: "Understanding different state management solutions in React.",
      content: "Choosing the right state management solution is crucial for your application...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      date: "2024-02-15",
      readTime: "7 min read",
      category: "Web Development",
      tags: ["React", "State Management", "Redux"],
      image: a6,
      likes: 41,
      comments: 14
    },
    {
      id: 7,
      title: "Modern CSS Techniques",
      slug: "modern-css-techniques",
      excerpt: "Explore modern CSS features and best practices.",
      content: "CSS has evolved significantly with new features and capabilities...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      date: "2024-02-10",
      readTime: "6 min read",
      category: "CSS",
      tags: ["CSS", "Web Design", "Styling"],
      image: a7,
      likes: 36,
      comments: 11
    },
    {
      id: 8,
      title: "Building RESTful APIs",
      slug: "building-restful-apis",
      excerpt: "Learn how to design and implement RESTful APIs.",
      content: "RESTful APIs are essential for modern web applications...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      date: "2024-02-05",
      readTime: "8 min read",
      category: "Backend",
      tags: ["API", "Backend", "REST"],
      image: a8,
      likes: 44,
      comments: 16
    },
    {
      id: 9,
      title: "Testing React Applications",
      slug: "testing-react-applications",
      excerpt: "Best practices for testing React components and applications.",
      content: "Testing is crucial for maintaining code quality and reliability...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      date: "2024-01-30",
      readTime: "7 min read",
      category: "Testing",
      tags: ["React", "Testing", "Jest"],
      image: a9,
      likes: 39,
      comments: 13
    },
    {
      id: 10,
      title: "Deploying Web Applications",
      slug: "deploying-web-applications",
      excerpt: "A guide to deploying your web applications to production.",
      content: "Deployment is the final step in bringing your application to users...",
      author: {
        name: "Sachithra",
        avatar: "/avatar.jpg",
        bio: "Full Stack Developer & Content Creator"
      },
      date: "2024-01-25",
      readTime: "6 min read",
      category: "DevOps",
      tags: ["Deployment", "DevOps", "Hosting"],
      image: a10,
      likes: 47,
      comments: 19
    }
  ];

  const categories = ['all', 'development', 'design', 'technology'];

  const filteredPosts = blogPosts
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="relative aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <HeartIcon className={`w-5 h-5 ${
                        likedPosts.includes(post.id) ? 'text-red-500 fill-current' : 'text-gray-400'
                      }`} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
                      <UserIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.readTime}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.likes} likes
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
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
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blogPosts.find(p => p.id === showShareModal)?.title || '')}&url=${encodeURIComponent(`https://yourdomain.com/blog/${blogPosts.find(p => p.id === showShareModal)?.slug || ''}`)}`)}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Twitter
                </button>
                <button
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yourdomain.com/blog/${blogPosts.find(p => p.id === showShareModal)?.slug || ''}`)}`)}
                  className="flex-1 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
                >
                  LinkedIn
                </button>
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://yourdomain.com/blog/${blogPosts.find(p => p.id === showShareModal)?.slug || ''}`)}`)}
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