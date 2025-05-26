import { motion } from 'framer-motion';

const CodingStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.3 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📊 Coding Stats</h2>
      <div className="flex flex-col items-center space-y-6">
        {/* GitHub Stats Card */}
        <img
          src="https://github-readme-stats.vercel.app/api?username=Sachithra-228&show_icons=true&theme=radical"
          alt="Sachithra's GitHub Stats"
          className="w-full max-w-md rounded-lg shadow-md"
        />
        {/* Top Languages Card */}
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sachithra-228&layout=compact&theme=radical"
          alt="Sachithra's Top Languages"
          className="w-full max-w-md rounded-lg shadow-md"
        />
        {/* Streak Stats Card - Optional, but nice */}
        {/* You can add this if you prefer, or stick to the above two */}
        {/*
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=Sachithra-228&theme=radical"
          alt="Sachithra's GitHub Streak"
          className="w-full max-w-md rounded-lg shadow-md"
        />
        */}
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Check out my <a href="https://github.com/Sachithra-228" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">GitHub profile</a> for more details.
        </p>
      </div>
    </motion.div>
  );
};

export default CodingStats; 