import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  CodeBracketIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
} from '@heroicons/react/24/outline';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  features: string[];
  price: string;
}

const Services = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies.',
      icon: CodeBracketIcon,
      features: [
        'Responsive Design',
        'React/Next.js Development',
        'API Integration',
        'Performance Optimization',
      ],
      price: 'Starting at $1,500',
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces.',
      icon: PaintBrushIcon,
      features: [
        'Wireframing',
        'Prototyping',
        'User Research',
        'Design Systems',
      ],
      price: 'Starting at $1,200',
    },
    {
      id: 3,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications.',
      icon: DevicePhoneMobileIcon,
      features: [
        'iOS Development',
        'Android Development',
        'React Native',
        'App Store Optimization',
      ],
      price: 'Starting at $2,000',
    },
    {
      id: 4,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment.',
      icon: CloudIcon,
      features: [
        'AWS/Azure Setup',
        'DevOps',
        'CI/CD Pipeline',
        'Serverless Architecture',
      ],
      price: 'Starting at $1,800',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services - Sachithra</title>
        <meta name="description" content="Explore the professional services I offer in web development, design, and more." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional solutions tailored to your needs. Let's build something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <svg
                          className="h-5 w-5 text-primary-500 mr-2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-primary-600 dark:text-primary-400 font-semibold">
                    {service.price}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4">
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss your project requirements and create a tailored solution.
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200">
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Services; 