import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface QnAItem {
  question: string;
  answer: string;
}

const QnA = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const qnaItems: QnAItem[] = [
    {
      question: "What is your educational background?",
      answer: "I have a Bachelor's degree in Computer Science from the University of Colombo School of Computing (UCSC)."
    },
    {
      question: "What programming languages do you know?",
      answer: "I am proficient in JavaScript, TypeScript, Python, Java, and C++. I also have experience with various web development frameworks and tools."
    },
    {
      question: "What is your work experience?",
      answer: "I have worked as a Software Engineer at several companies, focusing on web development, mobile app development, and cloud computing."
    },
    {
      question: "What are your career goals?",
      answer: "I aim to become a Full Stack Developer and eventually a Technical Lead, focusing on building scalable and user-friendly applications."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {qnaItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-4 py-3 text-left flex justify-between items-center bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900 dark:text-white">{item.question}</span>
              <ChevronDownIcon
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-4 py-3 bg-white dark:bg-gray-800"
              >
                <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default QnA; 