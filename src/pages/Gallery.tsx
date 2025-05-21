import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface Image {
  id: number;
  src: string;
  alt: string;
  category: 'events' | 'work' | 'personal';
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [filter, setFilter] = useState<'all' | 'events' | 'work' | 'personal'>('all');

  const images: Image[] = [
    {
      id: 1,
      src: '/gallery/event1.jpg',
      alt: 'Tech Conference 2024',
      category: 'events',
    },
    {
      id: 2,
      src: '/gallery/work1.jpg',
      alt: 'Project Screenshot',
      category: 'work',
    },
    {
      id: 3,
      src: '/gallery/personal1.jpg',
      alt: 'Personal Photo',
      category: 'personal',
    },
    // Add more images as needed
  ];

  const filteredImages = images.filter(
    (image) => filter === 'all' || image.category === filter
  );

  return (
    <>
      <Helmet>
        <title>Gallery - Sachithra</title>
        <meta name="description" content="Explore my gallery of events, work samples, and personal photos." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Gallery</h1>

          <div className="flex flex-wrap gap-4 mb-8">
            {(['all', 'events', 'work', 'personal'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === type
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="relative max-w-4xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 text-white hover:text-gray-300"
                    onClick={() => setSelectedImage(null)}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto rounded-lg"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/your-video-id"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/your-video-id"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Gallery; 