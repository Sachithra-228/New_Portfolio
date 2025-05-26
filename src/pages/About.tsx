import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  CodeBracketIcon,
  CommandLineIcon,
  ServerIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline';

import CodingStats from '../components/CodingStats';
import InteractiveMap from '../components/InteractiveMap';
import QnA from '../components/QnA';

const About = () => {
  const skills = [
    {
      name: 'Frontend Development',
      icon: <CodeBracketIcon className="h-6 w-6" />,
      description: 'Building responsive and interactive user interfaces with React and TypeScript'
    },
    {
      name: 'Backend Development',
      icon: <ServerIcon className="h-6 w-6" />,
      description: 'Creating robust server-side applications with Node.js and Express'
    },
    {
      name: 'Cloud Computing',
      icon: <CloudIcon className="h-6 w-6" />,
      description: 'Deploying and managing applications on AWS cloud infrastructure'
    },
    {
      name: 'Mobile Development',
      icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
      description: 'Developing cross-platform mobile applications with React Native'
    },
    {
      name: 'UI/UX Design',
      icon: <PaintBrushIcon className="h-6 w-6" />,
      description: 'Designing intuitive and engaging user experiences'
    },
    {
      name: 'DevOps',
      icon: <CommandLineIcon className="h-6 w-6" />,
      description: 'Implementing CI/CD pipelines and containerization with Docker'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <Helmet>
        <title>About Me | Sachithra's Portfolio</title>
        <meta name="description" content="Learn more about my skills, experience, and journey in software development" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            About Me
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            A passionate full-stack developer with a focus on creating impactful solutions
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-blue-600 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <CodingStats />
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Global Reach</h2>
          <InteractiveMap />
        </div>

        <div className="mt-16">
          <QnA />
        </div>
      </div>
    </motion.div>
  );
};

export default About; 