import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const QnA = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: 'What technologies do you specialize in?',
      answer: 'I primarily specialize in full-stack development with a focus on React, TypeScript, Node.js, and Tailwind CSS. I also have experience with MongoDB, AWS, and various other tools.',
    },
    {
      question: 'How can I collaborate with you?',
      answer: 'You can reach out to me through the contact form below, or connect with me on LinkedIn or GitHub. I\'m always open to discussing new projects and collaborations.',
    },
    {
      question: 'Do you create content on other platforms besides YouTube?',
      answer: 'Yes, I also share insights and updates on my social media channels, particularly LinkedIn and Instagram.',
    },
    // Add more FAQ items here
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.3 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">💬 Q&A / Ask Me Anything</h2>

      {/* FAQ Section */}
      <div className="space-y-4 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h3>
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
            <button
              className="flex justify-between items-center w-full text-left font-semibold text-gray-900 dark:text-white focus:outline-none"
              onClick={() => toggleQuestion(index)}
            >
              <span>{faq.question}</span>
              <motion.span
                animate={{ rotate: openQuestion === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDownIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </motion.span>
            </button>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: openQuestion === index ? 1 : 0, height: openQuestion === index ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 text-gray-600 dark:text-gray-300 overflow-hidden"
            >
              {faq.answer}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Contact Form Section - Basic Placeholder */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Ask a Question</h3>
        <div className="flex flex-col space-y-4">
          <a
            href="mailto:wijesinghesachithra@gmail.com"
            className="inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Send me an Email
          </a>
          <a
            href="https://wa.me/+94779214221"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition-colors"
          >
            Message me on WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default QnA; 