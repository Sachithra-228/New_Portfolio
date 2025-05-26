import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

import bv2Video from '../videos/bv2.mp4';
import schoolSpeechVideo   from '../videos/school speech.mp4';
import schoolImage from '../images/school.jpg';
import school1Image from '../images/school1.jpg';
import school2Image from '../images/school2.jpg';
import library1Image from '../images/library1.jpg';
import library2Image from '../images/library2.jpg';
import library3Image from '../images/library3.jpg';
import lkVideo from '../videos/lk.mp4';
import lakshapathi1Image from '../images/lakshapathi1.png';
import lakshapathi2Image from '../images/lakshapathi2.png';

import CodingStats from '../components/CodingStats';
import InteractiveMap from '../components/InteractiveMap';
import QnA from '../components/QnA';

const About = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Senior Developer',
      description: 'Leading development teams, mentoring junior developers, and building innovative web solutions.',
    },
    {
      year: '2023',
      title: 'Milestone Content Creator',
      description: 'Reached 5K+ views and growing audience on YouTube. Focused on accessible tech education and creative tutorials.',
    },
    {
      year: '2022',
      title: 'TV & Radio Presenter',
      description: 'Worked with ThreeVision TV and Sri Lanka Broadcasting Corporation as a presenter, blending communication with tech passion.',
    },
    {
      year: '2020',
      title: 'Full Stack Developer',
      description: 'Started working on complete web applications using modern frontend and backend stacks.',
    },
    {
      year: '2018',
      title: 'Started Coding Journey',
      description: 'Began learning programming during school while completing A/Ls in the Bio Stream at Dharmapala Vidyalaya, Pannipitiya.',
    },
  ];

  return (
    <div className="relative w-full min-h-screen">
      <Helmet>
        <title>About Me - Sachithra</title>
        <meta name="description" content="Learn more about my journey as a developer and content creator." />
      </Helmet>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover"
      >
        <source src={bv2Video} type="video/mp4" />
      </video>

      <div className="relative z-10 w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-7xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">✨ My Story</h1>
          
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Hi, I'm Sachithra — a full-stack developer, creative content creator, announcer, and passionate YouTuber with a vision to inspire through technology and storytelling.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">📚 Where It All Began</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Since my childhood at Dharmapala Vidyalaya, Pannipitiya, I've always had a passion for exploring new things and stepping into creative challenges. I completed my Advanced Level studies in the Bio stream, but my heart was always drawn toward technology and innovation.
            </p>

            {/* School Media Section */}
            <div className="mb-12 space-y-8">
              {/* School Speech Video */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900">
                <video 
                  src={schoolSpeechVideo}
                  poster={schoolImage}
                  controls
                  className="w-full aspect-video object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* School Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-xl overflow-hidden shadow-lg group h-full"
                >
                  <img 
                    src={schoolImage} 
                    alt="School" 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-xl overflow-hidden shadow-lg group h-full"
                >
                  <img 
                    src={school1Image} 
                    alt="School 1" 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-xl overflow-hidden shadow-lg group h-full"
                >
                  <img 
                    src={school2Image} 
                    alt="School 2" 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </motion.div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">💻 The Developer in Me</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              As a developer, I love building modern, user-focused web applications. I specialize in both frontend and backend technologies, ensuring every line of code is clean, scalable, and efficient. Whether's it's developing portfolio sites, creative tools, or contributing to open-source projects I'm all in with passion and precision.
            </p>

            {/* Library Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-xl overflow-hidden shadow-lg group h-full"
              >
                <img 
                  src={library1Image} 
                  alt="Library 1" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-xl overflow-hidden shadow-lg group h-full"
              >
                <img 
                  src={library2Image} 
                  alt="Library 2" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-xl overflow-hidden shadow-lg group h-full"
              >
                <img 
                  src={library3Image} 
                  alt="Library 3" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </motion.div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">🎥 The Content Creator & YouTuber</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              My content creation journey started with a mission to make tech simple and accessible. From tutorials to live sessions, I create engaging videos to empower others. Growing a thriving YouTube community is something I deeply value — and hitting 5K subscribers this year is a goal I'm excited to achieve.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">🎙️ The Voice Behind the Mic</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I've also found a powerful outlet in announcing and presenting. I've worked as a TV presenter at ThreeVision TV and a radio presenter at Sri Lanka Broadcasting Corporation. These experiences have strengthened my communication skills and allowed me to merge creativity with expression.
            </p>

            {/* Media Presentation Section */}
            <div className="mb-12 space-y-8">
              {/* Video Section */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900">
                <video 
                  src={lkVideo}
                  controls
                  className="w-full aspect-video object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-xl overflow-hidden shadow-lg group h-full"
                >
                  <img 
                    src={lakshapathi1Image} 
                    alt="Lakshapathi 1" 
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-xl overflow-hidden shadow-lg group h-full"
                >
                  <img 
                    src={lakshapathi2Image} 
                    alt="Lakshapathi 2" 
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </motion.div>
              </div>
            </div>
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

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">🕒 Timeline</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ amount: 0.3 }}
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

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 mt-12">🎓 Education</h2>
          <div className="space-y-8">
            {[
              {
                period: '2021 – Present',
                title: 'BSc (Hons) in Information Technology',
                description: 'Specialising in Software Engineering',
                details: 'Actively involved in tech communities and student organizations.',
              },
              {
                period: '2018 – 2020',
                title: 'Advanced Level (Bio Stream)',
                description: 'Dharmapala Vidyalaya, Pannipitiya',
                details: [
                  'Developed leadership and communication skills.',
                  'Started self-learning coding and digital tools.',
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ amount: 0.3 }}
                className="relative pl-8 border-l-2 border-primary-500"
              >
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary-500" />
                <div className="mb-2">
                  <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                    {item.period}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{item.description}</p>
                {Array.isArray(item.details) ? (
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">{item.details}</p>
                )}
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 mt-12">🏆 Awards & Recognition</h2>
          <div className="space-y-8">
            {[
              {
                year: '2023',
                title: 'YouTube Growth Recognition',
                organization: 'YouTube Community',
                description: 'Reached significant milestone in content reach and engagement.',
              },
              {
                year: '2022',
                title: 'Best Radio Presenter (SLBC)',
                organization: 'Sri Lanka Broadcasting Corporation',
                description: 'Recognized for clear, impactful communication and tech-focused sessions.',
              },
              {
                year: '2021',
                title: 'Open Source Contributor Badge',
                organization: 'GitHub Community',
                description: 'Contributed to public repositories and supported beginner-friendly projects.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ amount: 0.3 }}
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
                <p className="text-primary-600 dark:text-primary-400 mb-2">{item.organization}</p>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* New Interactive Sections */}
          <div className="space-y-12 mt-12">
            <CodingStats />
            <InteractiveMap />
            <QnA />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 