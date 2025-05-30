import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  AcademicCapIcon,
  TrophyIcon,
  StarIcon,
  HeartIcon,
  SparklesIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  FireIcon,
  BoltIcon,
  GlobeAltIcon,
  UserGroupIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
  CodeBracketIcon,
  CommandLineIcon,
  BeakerIcon,
  ChartBarIcon,
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  ArrowTrendingUpIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

interface Achievement {
  id: number;
  title: string;
  description: string;
  category: 'award' | 'certification' | 'milestone' | 'recognition';
  date: string;
  icon: string;
  image?: string;
  link?: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

interface Resource {
  id: number;
  title: string;
  description: string;
  category: 'course' | 'internship' | 'career' | 'certification';
  icon: string;
  link: string;
  provider: string;
  tags: string[];
}

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "YouTube Milestone",
      description: "Reached 5K+ subscribers on YouTube, creating tech tutorials and educational content",
      category: "recognition",
      date: "2024",
      icon: "TrophyIcon",
      stats: [
        { value: "5K+", label: "Subscribers" },
        { value: "2024", label: "Year" }
      ]
    },
    {
      id: 2,
      title: "Content Creation",
      description: "Successfully created and managed multiple tech-focused content series",
      category: "recognition",
      date: "2023",
      icon: "StarIcon",
      stats: [
        { value: "Multiple", label: "Series" },
        { value: "2023", label: "Year" }
      ]
    },
    {
      id: 3,
      title: "Media Presence",
      description: "Featured as a presenter on ThreeVision TV and Sri Lanka Broadcasting Corporation",
      category: "recognition",
      date: "2023",
      icon: "UserGroupIcon",
      stats: [
        { value: "TwoVision", label: "Platforms" },
        { value: "2023", label: "Year" }
      ]
    },
    {
      id: 4,
      title: "Tech Education",
      description: "Conducted workshops and training sessions for aspiring developers",
      category: "recognition",
      date: "2022",
      icon: "RocketLaunchIcon",
      stats: [
        { value: "Workshops", label: "Sessions" },
        { value: "2022", label: "Year" }
      ]
    },
    {
      id: 5,
      title: "Creative Projects",
      description: "Developed innovative web applications and creative tools",
      category: "recognition",
      date: "2022",
      icon: "LightBulbIcon",
      stats: [
        { value: "Innovative", label: "Projects" },
        { value: "2022", label: "Year" }
      ]
    },
    {
      id: 6,
      title: "Community Impact",
      description: "Built a supportive community of tech enthusiasts and learners",
      category: "recognition",
      date: "2021",
      icon: "HeartIcon",
      stats: [
        { value: "Supportive", label: "Community" },
        { value: "2021", label: "Year" }
      ]
    }
  ];

  const resources: Resource[] = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Master the basics of HTML, CSS, and JavaScript with this comprehensive course.",
      category: "course",
      icon: "BookOpenIcon",
      link: "https://www.coursera.org/learn/web-development",
      provider: "Coursera",
      tags: ["HTML", "CSS", "JavaScript", "Beginner"]
    },
    {
      id: 2,
      title: "Google Summer of Code",
      description: "Work with open source organizations and get paid for your contributions.",
      category: "internship",
      icon: "CodeBracketIcon",
      link: "https://summerofcode.withgoogle.com",
      provider: "Google",
      tags: ["Open Source", "Paid", "Remote"]
    },
    {
      id: 3,
      title: "Resume Building Workshop",
      description: "Learn how to create a standout resume that gets you noticed by top tech companies.",
      category: "career",
      icon: "PresentationChartLineIcon",
      link: "https://www.linkedin.com/learning/resume-writing",
      provider: "LinkedIn Learning",
      tags: ["Career", "Resume", "Workshop"]
    },
    {
      id: 4,
      title: "Meta Front-End Developer",
      description: "Professional certification program covering modern front-end development.",
      category: "certification",
      icon: "AcademicCapIcon",
      link: "https://www.coursera.org/meta-front-end-developer",
      provider: "Meta",
      tags: ["React", "Advanced", "Professional"]
    },
    {
      id: 5,
      title: "Google Digital Garage",
      description: "Free digital skills training for everyone, from beginners to professionals.",
      category: "course",
      icon: "BookOpenIcon",
      link: "https://learndigital.withgoogle.com/digitalgarage",
      provider: "Google",
      tags: ["Free", "Digital Skills", "All Levels"]
    },
    {
      id: 6,
      title: "Outreachy Internships",
      description: "Paid internships in open source and open science for underrepresented groups.",
      category: "internship",
      icon: "CodeBracketIcon",
      link: "https://www.outreachy.org",
      provider: "Outreachy",
      tags: ["Open Source", "Diversity", "Paid"]
    }
  ];

  const categories = ['all', 'award', 'certification', 'milestone', 'recognition'];

  const filteredAchievements = achievements.filter(
    achievement => selectedCategory === 'all' || achievement.category === selectedCategory
  );

  const [selectedResourceCategory, setSelectedResourceCategory] = useState<string>('all');
  const resourceCategories = ['all', 'course', 'internship', 'career', 'certification'];

  const filteredResources = resources.filter(
    resource => selectedResourceCategory === 'all' || resource.category === selectedResourceCategory
  );

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrophyIcon':
        return <TrophyIcon className="w-6 h-6" />;
      case 'StarIcon':
        return <StarIcon className="w-6 h-6" />;
      case 'AcademicCapIcon':
        return <AcademicCapIcon className="w-6 h-6" />;
      case 'HeartIcon':
        return <HeartIcon className="w-6 h-6" />;
      case 'UserGroupIcon':
        return <UserGroupIcon className="w-6 h-6" />;
      case 'SparklesIcon':
        return <SparklesIcon className="w-6 h-6" />;
      case 'LightBulbIcon':
        return <LightBulbIcon className="w-6 h-6" />;
      default:
        return <TrophyIcon className="w-6 h-6" />;
    }
  };

  const getResourceIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpenIcon':
        return <BookOpenIcon className="w-6 h-6" />;
      case 'CodeBracketIcon':
        return <CodeBracketIcon className="w-6 h-6" />;
      case 'PresentationChartLineIcon':
        return <PresentationChartLineIcon className="w-6 h-6" />;
      case 'AcademicCapIcon':
        return <AcademicCapIcon className="w-6 h-6" />;
      default:
        return <BookOpenIcon className="w-6 h-6" />;
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Achievements - Sachithra</title>
        <meta name="description" content="Explore my achievements in tech, content creation, and community building." />
      </Helmet>

      <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-7xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Achievements & Milestones</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            A journey of growth, learning, and making an impact in the tech community.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-8">
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

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    {getIcon(achievement.icon)}
                  </div>
                  <span className="ml-4 text-sm font-medium text-primary-600 dark:text-primary-400">
                    {achievement.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Grow with Me Section */}
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore these carefully curated resources to kickstart your career in technology and development.
              </p>
            </motion.div>

            {/* Resource Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {resourceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedResourceCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedResourceCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
                        {getResourceIcon(resource.icon)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {resource.provider}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {resource.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                      {resource.category === 'course' ? 'Start Course' :
                       resource.category === 'internship' ? 'Apply Now' :
                       resource.category === 'career' ? 'Learn More' :
                       'Get Certified'}
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                  <TrophyIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">6+</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Awards</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg text-green-600 dark:text-green-400">
                  <ChartBarIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">5K+</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">YouTube Subscribers</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg text-purple-600 dark:text-purple-400">
                  <UserGroupIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">500+</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Community Members</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg text-yellow-600 dark:text-yellow-400">
                  <GlobeAltIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">10+</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Countries Reached</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Achievement Detail Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
                  {getIcon(selectedAchievement.icon)}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {selectedAchievement.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {selectedAchievement.date}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedAchievement.description}
              </p>

              {selectedAchievement.stats && (
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {selectedAchievement.stats.map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {selectedAchievement.image && (
                <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
                  <img
                    src={selectedAchievement.image}
                    alt={selectedAchievement.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {selectedAchievement.link && (
                <a
                  href={selectedAchievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                >
                  View Details
                  <ArrowTrendingUpIcon className="w-4 h-4 ml-1" />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Achievements; 