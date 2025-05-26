import { motion } from 'framer-motion';
import { CodeBracketIcon, CommandLineIcon, BeakerIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const CodingStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Coding Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center space-x-4">
          <CodeBracketIcon className="w-8 h-8 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Lines of Code</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">50,000+</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <CommandLineIcon className="w-8 h-8 text-green-500" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">20+</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <BeakerIcon className="w-8 h-8 text-purple-500" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Experiments</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">100+</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ChartBarIcon className="w-8 h-8 text-yellow-500" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Contributions</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">500+</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CodingStats; 