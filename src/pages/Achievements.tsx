import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';

interface Achievement {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  type: 'certificate' | 'award';
  image?: string;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024-02',
      description: 'Professional certification for designing distributed systems on AWS.',
      type: 'certificate',
      image: '/achievements/aws-cert.jpg',
    },
    {
      id: 2,
      title: 'Best Developer Award',
      issuer: 'Tech Conference 2024',
      date: '2024-01',
      description: 'Recognized for outstanding contributions to open-source projects.',
      type: 'award',
    },
    {
      id: 3,
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023-12',
      description: 'Certification for building scalable and reliable applications using Google Cloud technologies.',
      type: 'certificate',
      image: '/achievements/gcp-cert.jpg',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Achievements - Sachithra</title>
        <meta name="description" content="View my professional certifications, awards, and recognitions." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Achievements</h1>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary-500"
              >
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary-500" />
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {achievement.type === 'certificate' ? (
                      <AcademicCapIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    ) : (
                      <TrophyIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    )}
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(achievement.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                        })}
                      </span>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 mb-2">
                      {achievement.issuer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {achievement.description}
                    </p>
                    {achievement.image && (
                      <div className="mt-4">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'React',
                'TypeScript',
                'Node.js',
                'Python',
                'AWS',
                'Docker',
                'MongoDB',
                'GraphQL',
                'Tailwind CSS',
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                >
                  <span className="text-gray-900 dark:text-white">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Achievements; 