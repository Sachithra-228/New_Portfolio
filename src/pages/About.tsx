import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const About = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Senior Developer',
      description: 'Leading development teams and mentoring junior developers.',
    },
    {
      year: '2022',
      title: 'Content Creator',
      description: 'Started creating educational content and tutorials.',
    },
    {
      year: '2020',
      title: 'Full Stack Developer',
      description: 'Working on various web applications and projects.',
    },
    {
      year: '2018',
      title: 'Started Coding Journey',
      description: 'Began learning programming and web development.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Me - Sachithra</title>
        <meta name="description" content="Learn more about my journey as a developer and content creator." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">My Story</h1>
          
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a passionate developer and content creator with a deep love for technology and education.
              My journey in tech began in 2018, and since then, I've been constantly learning and growing
              in this ever-evolving field.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              As a developer, I specialize in creating modern web applications using cutting-edge
              technologies. I believe in writing clean, maintainable code and following best practices
              to deliver high-quality solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Through my content creation journey, I aim to share knowledge and help others learn
              programming and web development. I believe in the power of community and continuous
              learning.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
            >
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Download Resume
            </a>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Timeline</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary-500"
              >
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary-500" />
                <div className="mb-2">
                  <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Education</h2>
          <div className="space-y-8">
            {/* Add individual education entries here */}
            <div className="relative pl-8 border-l-2 border-primary-500">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary-500" />
              <div className="mb-2">
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                  [Year]
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                [Degree/Certification Name]
              </h3>
              <p className="text-gray-600 dark:text-gray-300">[Institution Name] - [Details/Highlights]</p>
            </div>
            {/* Example: */}
            {/*
            <div className="relative pl-8 border-l-2 border-primary-500">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary-500" />
              <div className="mb-2">
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                  20XX
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-600 dark:text-gray-300">University Name - Focused on software engineering and data structures.</p>
            </div>
            */}
          </div>
        </motion.div>

        {/* Awards & Recognition Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Awards & Recognition</h2>
          <div className="space-y-8">
            {/* Add individual awards/recognition here */}
            <div className="relative pl-8 border-l-2 border-primary-500">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary-500" />
              <div className="mb-2">
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                  [Year]
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                [Award/Recognition Name]
              </h3>
              <p className="text-gray-600 dark:text-gray-300">[Issuing Body] - [Details/Significance]</p>
            </div>
            {/* Example: */}
            {/*
            <div className="relative pl-8 border-l-2 border-primary-500">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary-500" />
              <div className="mb-2">
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                  20XX
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Dean's List
              </h3>
              <p className="text-gray-600 dark:text-gray-300">University Name - Achieved academic excellence.</p>
            </div>
            */}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About; 