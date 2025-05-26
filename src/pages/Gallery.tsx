import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  HeartIcon, 
  ShareIcon, 
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

// Import gallery images
import schoolImage from '../images/school.jpg';
import school1Image from '../images/school1.jpg';
import school2Image from '../images/school2.jpg';
import library1Image from '../images/library1.jpg';
import library2Image from '../images/library2.jpg';
import library3Image from '../images/library3.jpg';
import lakshapathi1Image from '../images/lakshapathi1.png';
import lakshapathi2Image from '../images/lakshapathi2.png';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  tags: string[];
  description: string;
  date: string;
  likes: number;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [likedImages, setLikedImages] = useState<number[]>([]);
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'newest' | 'likes'>('newest');

  const images: GalleryImage[] = [
    {
      id: 1,
      src: schoolImage,
      alt: "School Building",
      category: "architecture",
      tags: ["school", "building", "education"],
      description: "The main building of Dharmapala Vidyalaya, Pannipitiya",
      date: "2024-01-15",
      likes: 42
    },
    {
      id: 2,
      src: school1Image,
      alt: "School Campus",
      category: "campus",
      tags: ["school", "campus", "nature"],
      description: "Beautiful view of the school campus during spring",
      date: "2024-01-10",
      likes: 38
    },
    {
      id: 3,
      src: school2Image,
      alt: "School Event",
      category: "events",
      tags: ["school", "event", "students"],
      description: "Annual sports day celebration at the school",
      date: "2024-01-05",
      likes: 56
    },
    {
      id: 4,
      src: library1Image,
      alt: "Library Interior",
      category: "architecture",
      tags: ["library", "interior", "books"],
      description: "Modern interior of the school library",
      date: "2024-01-20",
      likes: 29
    },
    {
      id: 5,
      src: library2Image,
      alt: "Reading Area",
      category: "campus",
      tags: ["library", "reading", "students"],
      description: "Comfortable reading area in the library",
      date: "2024-01-18",
      likes: 34
    },
    {
      id: 6,
      src: library3Image,
      alt: "Library Collection",
      category: "architecture",
      tags: ["library", "books", "collection"],
      description: "Extensive collection of books in the library",
      date: "2024-01-12",
      likes: 27
    },
    {
      id: 7,
      src: lakshapathi1Image,
      alt: "Lakshapathi Event",
      category: "events",
      tags: ["event", "celebration", "cultural"],
      description: "Cultural event at Lakshapathi",
      date: "2024-01-08",
      likes: 45
    },
    {
      id: 8,
      src: lakshapathi2Image,
      alt: "Lakshapathi Performance",
      category: "events",
      tags: ["performance", "cultural", "art"],
      description: "Artistic performance at Lakshapathi",
      date: "2024-01-03",
      likes: 51
    }
  ];

  const categories = ['all', 'architecture', 'campus', 'events'];

  const filteredImages = images
    .filter(image => 
      (selectedCategory === 'all' || image.category === selectedCategory) &&
      (searchQuery === '' || 
        image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    )
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return b.likes - a.likes;
    });

  const toggleLike = (imageId: number) => {
    setLikedImages(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  const downloadImage = (image: GalleryImage) => {
    const link = document.createElement('a');
    link.href = image.src;
    link.download = `${image.alt.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareImage = (image: GalleryImage) => {
    const shareData = {
      title: image.alt,
      text: image.description,
      url: image.src
    };

    if (navigator.share) {
      navigator.share(shareData);
    } else {
      setShowShareModal(true);
    }
  };

  const handlePrevious = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      const previousImage = filteredImages[currentIndex - 1] || null;
      setSelectedImage(previousImage);
    }
  };

  const handleNext = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      const nextImage = filteredImages[currentIndex + 1] || null;
      setSelectedImage(nextImage);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Gallery - Sachithra</title>
        <meta name="description" content="Explore my photo gallery featuring school events, architecture, and campus life." />
      </Helmet>

      <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-7xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Photo Gallery</h1>

          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="flex flex-wrap gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'likes')}
                className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="likes">Most Liked</option>
              </select>

              <div className="flex flex-wrap gap-2">
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

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full"
              >
                <div className="relative aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />
                  
                  {/* Image Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedImage(image)}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-700" />
                      </button>
                      <button
                        onClick={() => toggleLike(image.id)}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        {likedImages.includes(image.id) ? (
                          <HeartIconSolid className="w-5 h-5 text-red-500" />
                        ) : (
                          <HeartIcon className="w-5 h-5 text-gray-700" />
                        )}
                      </button>
                      <button
                        onClick={() => downloadImage(image)}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <ArrowDownTrayIcon className="w-5 h-5 text-gray-700" />
                      </button>
                      <button
                        onClick={() => shareImage(image)}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <ShareIcon className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {image.alt}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {image.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {image.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            <div className="relative max-w-7xl max-h-[90vh] mx-4" onClick={e => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[90vh] w-auto mx-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {selectedImage.alt}
                </h3>
                <p className="text-gray-200">
                  {selectedImage.description}
                </p>
              </div>
            </div>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              onClick={handlePrevious}
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </button>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              onClick={handleNext}
            >
              <ChevronRightIcon className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Share Image
              </h3>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedImage?.alt || '')}&url=${encodeURIComponent(selectedImage?.src || '')}`)}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Twitter
                </button>
                <button
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(selectedImage?.src || '')}`)}
                  className="flex-1 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
                >
                  LinkedIn
                </button>
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(selectedImage?.src || '')}`)}
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

export default Gallery; 