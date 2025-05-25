import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CodeBracketIcon, 
  VideoCameraIcon, 
  RocketLaunchIcon,
  ArrowLeftIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import profileImage from '../images/s.jpg';
import flashImage from '../images/flash.jpg';
import walkingImage from '../images/walking.jpg';
import speechImage from '../images/speech.jpg';

// Project images
import todoAppImage from '../images/todoapp.jpg';
import quizAppImage from '../images/quizapp.jpg';
import votingSystemImage from '../images/votingsystem.jpg';
import financeTrackerImage from '../images/financetracker.jpg';
import womanSafetyTrackerImage from '../images/womansafetytrackerapp.jpg';
import musicTrackerImage from '../images/musictrack.jpg';

import flashVideo from '../videos/flash.mp4';
import walkingVideo from '../videos/walking.mp4';
import speechVideo from '../videos/speech.mp4';

// Import the Chatbot component
import Chatbot from '../components/Chatbot';
import Typewriter from '../components/Typewriter';

const Home = () => {
  const [selectedApp, setSelectedApp] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string } | null>(null);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isCycling, setIsCycling] = useState(true);

  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const playlistIds = [
    'PLywgqKvsv_-2Dy2lBhgVwjYUVHyTWUl5L',
    'PLywgqKvsv_-2hNjTrbr3ILLPz86M5mf0B',
    'PLywgqKvsv_-3YECZGJamkHI0nBn48u_-S',
    'PLywgqKvsv_-2hIC_T6gK4Yu34e6i0_H_2',
    'PLywgqKvsv_-26oxRu41Y4qY3JwOfH6S7m',
    'PLywgqKvsv_-1eYjoElhXEC90UM2WtK1iu',
    'PLywgqKvsv_-0tcVb93raISiujJPTx10WT',
  ];

  useEffect(() => {
    if (isCycling) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        setCurrentSetIndex((prevIndex) => (prevIndex + 3) % playlistIds.length);
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = undefined;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = undefined;
      }
    };
  }, [isCycling, playlistIds.length]);

  const projects = [
    {
      id: 1,
      title: "Simple Todo App",
      description: "A basic todo application to manage your daily tasks.",
      technologies: ['React', 'CSS'],
      link: "https://github.com/sachithra-228/simple-todo-app",
      image: todoAppImage
    },
    {
      id: 2,
      title: "Quiz App",
      description: "An interactive quiz application with multiple categories.",
      technologies: ['React', 'TypeScript', 'API'],
      link: "https://github.com/sachithra-228/quiz-app",
      image: quizAppImage
    },
    {
      id: 3,
      title: "People Voting System",
      description: "A system for casting and tracking votes for individuals.",
      technologies: ['Node.js', 'Express', 'Database'],
      link: "https://github.com/sachithra-228/people-voting-system",
      image: votingSystemImage
    },
    {
      id: 4,
      title: "Finance Tracker",
      description: "Track your income and expenses to manage personal finance.",
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: "https://github.com/Sachithra-228/Finance_Tracker.git",
      image: financeTrackerImage
    },
    {
      id: 5,
      title: "Woman Safety Tracker",
      description: "A mobile application designed for woman safety.",
      technologies: ['React Native', 'Firebase'], // Placeholder technologies
      link: "https://www.figma.com/design/SFVaOVW0u7Ybfp2biz4lcn/2025-%E2%80%93-Lab-Exam-01?node-id=0-1&p=f&t=Vf8uLqI4xmtc6B5G-0", // Figma link provided
      image: womanSafetyTrackerImage
    },
    {
      id: 6,
      title: "Create Music Tracker",
      description: "An app to track and manage your music.", // Placeholder description
      technologies: ['React', 'API'], // Placeholder technologies
      link: "https://www.figma.com/design/12UcrchhyC2A4wfnrocb7F/labexam1?node-id=0-1&p=f&t=DpIJdnfuHObeL07G-0", // Figma link provided
      image: musicTrackerImage
    },
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 75 },
  ];

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'AWS', icon: '☁️' },
  ];

  const achievements = [
    {
      year: '2026 (Planned / Goal)',
      title: 'Creative Studio Vision',
      description: 'Founding a collaborative platform for content creators and developers to build, learn, and grow together.',
    },
    {
      year: '2025',
      title: 'Full-Stack Leadership',
      description: 'Led the development of end-to-end digital solutions, combining frontend creativity and backend performance for real-world clients.',
    },
    {
      year: '2024',
      title: 'Portfolio Launch & Community Growth',
      description: 'Launched my personal portfolio website showcasing projects, achievements, and design vision. Engaged with a growing developer community across GitHub and LinkedIn.',
    },
    {
      year: '2023',
      title: 'Content Creation Milestone',
      description: 'Reached 1K subscribers on YouTube by sharing dev tutorials, UI/UX insights, and tech reviews. Expanded reach as an announcer in live tech and cultural events.',
    },
    {
      year: '2022',
      title: 'Open Source & Collaboration',
      description: 'Contributed to major open-source projects with a focus on accessibility and performance. Mentored junior developers via Discord and local meetups.',
    },
    {
      year: '2021',
      title: 'Learning & Exploring',
      description: 'Built my first full-stack web app, laying the foundation for a journey into creative development. Started experimenting with YouTube videos on tech, productivity, and personal growth.',
    },
  ];

  const mobileApps = [
    {
      id: 1,
      name: "Fitness Tracker",
      description: "Track your workouts and health metrics",
      icon: "🏃‍♂️",
      screenshots: [
        "/screenshots/fitness-1.png",
        "/screenshots/fitness-2.png",
        "/screenshots/fitness-3.png"
      ]
    },
    {
      id: 2,
      name: "Recipe Finder",
      description: "Discover and save your favorite recipes",
      icon: "🍳",
      screenshots: [
        "/screenshots/recipe-1.png",
        "/screenshots/recipe-2.png",
        "/screenshots/recipe-3.png"
      ]
    },
    {
      id: 3,
      name: "Task Manager",
      description: "Organize your daily tasks efficiently",
      icon: "✓",
      screenshots: [
        "/screenshots/task-1.png",
        "/screenshots/task-2.png",
        "/screenshots/task-3.png"
      ]
    }
  ];

  const roles = ['Full-Stack Developer', 'Creative Content Creator', 'Announcer', 'YouTuber'];

  return (
    <>
      <Helmet>
        <title>Sachithra - Developer & Content Creator</title>
        <meta name="description" content="Welcome to my portfolio website. I'm a developer and content creator passionate about creating amazing digital experiences." />
        <meta property="og:title" content="Sachithra - Developer & Content Creator" />
        <meta property="og:description" content="Welcome to my portfolio website. I'm a developer and content creator passionate about creating amazing digital experiences." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="relative">
          <div className="px-4 sm:px-6 lg:px-8 py-12">
            {/* Introduction Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.3 }}
              className="text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12"
            >
              <div className="md:w-1/2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Hi, I'm <span className="text-primary-600 dark:text-primary-400">Sachithra</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-2">
                  Code is my language. The mic is my stage. The camera is my canvas.
                </p>
                {/* Placeholder for typewriter text */}
                <Typewriter roles={roles} />
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ amount: 0.3 }}
                  className="flex gap-4 justify-center md:justify-start"
                >
                  <Link
                    to="/projects"
                    className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                  >
                    View My Work
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-block bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                  >
                    Let's Connect
                  </Link>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ amount: 0.3 }}
                className="md:w-1/2 flex justify-center"
              >
                <img
                  src={profileImage}
                  alt="Sachithra's profile picture"
                  className="rounded-full shadow-xl w-64 h-64 object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Projects Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.3 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">My Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ amount: 0.3 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-40">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <CodeBracketIcon className="w-12 h-12 text-white opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-primary-200 text-xs font-medium px-2 py-1 rounded-full group-hover:bg-primary-200 dark:group-hover:bg-primary-700 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-semibold group-hover:translate-x-2 transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* iPhone Showcase Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.3 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Mobile Applications</h2>
              <div className="flex justify-center items-center min-h-[600px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ amount: 0.3 }}
                  className="relative w-[280px] h-[580px] bg-gray-900 rounded-[55px] p-4 shadow-2xl"
                >
                  {/* iPhone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[140px] h-[30px] bg-gray-900 rounded-b-[20px] z-10" />
                  
                  {/* Screen Content */}
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[45px] overflow-hidden">
                    {selectedApp === null ? (
                      // App Grid View
                      <div className="p-6 grid grid-cols-3 gap-4">
                        {mobileApps.map((app) => (
                          <motion.button
                            key={app.id}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedApp(app.id)}
                            className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-700 rounded-2xl"
                          >
                            <span className="text-3xl mb-2">{app.icon}</span>
                            <span className="text-xs text-center text-gray-600 dark:text-gray-300">{app.name}</span>
                          </motion.button>
                        ))}
                      </div>
                    ) : (
                      // App Detail View
                      <div className="h-full flex flex-col">
                        {/* App Header */}
                        <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
                          <button
                            onClick={() => setSelectedApp(null)}
                            className="text-primary-600 dark:text-primary-400"
                          >
                            <ArrowLeftIcon className="w-6 h-6" />
                          </button>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {mobileApps.find(app => app.id === selectedApp)?.name}
                          </h3>
                          <div className="w-6" /> {/* Spacer for alignment */}
                        </div>

                        {/* App Content */}
                        <div className="flex-1 overflow-y-auto p-4">
                          <div className="space-y-4">
                            {mobileApps.find(app => app.id === selectedApp)?.screenshots.map((screenshot, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ amount: 0.3 }}
                                className="bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden"
                              >
                                <img
                                  src={screenshot}
                                  alt={`Screenshot ${index + 1}`}
                                  className="w-full h-auto"
                                />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[120px] h-[5px] bg-gray-800 dark:bg-gray-600 rounded-full" />
                </motion.div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.3 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Skills & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ amount: 0.3 }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                      <span className="text-primary-600 dark:text-primary-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ amount: 0.3 }}
                        className="h-full bg-primary-600 dark:bg-primary-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.3 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Tech Stack</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ amount: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex items-center gap-2"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.3 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Journey So Far</h2>
              <div className="max-w-3xl mx-auto">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3, duration: 0.6 }}
                    viewport={{ amount: 0.3 }}
                    className="relative pl-8 pb-8 border-l-2 border-primary-600 dark:border-primary-400"
                  >
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-400" />
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                      <span className="text-primary-600 dark:text-primary-400 font-bold">{achievement.year}</span>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">{achievement.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.3 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ amount: 0.3 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <CodeBracketIcon className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating modern, responsive web applications with cutting-edge technologies.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ amount: 0.3 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <VideoCameraIcon className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Content Creation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sharing knowledge and experiences through engaging content and tutorials.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ amount: 0.3 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <RocketLaunchIcon className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Community</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building and nurturing tech communities through collaboration and mentorship.
                </p>
              </motion.div>
            </motion.div>

            {/* Social Media Section */}
            <motion.section
              id="social"
              className="py-16 bg-white dark:bg-gray-900"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ amount: 0.3 }}
            >
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Connect With Me</h2>
                <div className="flex justify-center gap-8">
                  {/* Facebook */}
                  <motion.a
                    href="https://www.facebook.com/sachithra.wijesinghe.77/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Facebook</span>
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                    href="https://www.instagram.com/sach_karon/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Instagram</span>
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    href="https://github.com/Sachithra-228"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">GitHub</span>
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    href="https://www.linkedin.com/in/sachithra-wijesinghe-5496a5270"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">LinkedIn</span>
                  </motion.a>
                </div>
              </div>
            </motion.section>

            {/* YouTube Channel Section */}
            <motion.section
              id="youtube"
              className="py-16 bg-gray-100 dark:bg-gray-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ amount: 0.3 }}
            >
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">My YouTube Playlists</h2>

                {/* Auto-cycling Embedded Playlists (showing 3 at a time) - Click navigates to YouTube */}
                <div className="flex justify-center space-x-6 overflow-hidden max-w-full mx-auto px-4">
                  {[0, 1, 2].map((offset) => {
                    const playlistIndex = (currentSetIndex + offset) % playlistIds.length;
                    const playlistId = playlistIds[playlistIndex];
                    // Construct the full YouTube playlist URL
                    const youtubeUrl = `https://www.youtube.com/playlist?list=${playlistId}`;
                    return (
                      <motion.div
                        key={offset}
                        className="w-1/3 flex-shrink-0 aspect-w-16 aspect-h-9 cursor-pointer"
                        onClick={() => window.open(youtubeUrl, '_blank')}
                         whileHover={{ scale: 1.03 }}
                      >
                         {/* Added conditional rendering to handle fewer than 3 playlists gracefully if needed in the future */}
                         {playlistId && ( // Ensure playlistId exists before rendering iframe
                           <iframe
                             src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
                             title={`YouTube Playlist ${playlistIndex + 1}`}
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                             allowFullScreen
                             className="w-full h-full rounded-lg shadow-xl pointer-events-none" // Add pointer-events-none to iframe to allow click on parent div
                           ></iframe>
                         )}
                      </motion.div>
                    );
                  })}
                </div>

              </div>
            </motion.section>

            {/* Video Gallery Section */}
            <motion.section
              id="videos"
              className="py-16 bg-white dark:bg-gray-900"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ amount: 0.3 }}
            >
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Video Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Video Card 1 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => setSelectedVideo({
                      src: flashVideo,
                      title: 'Flash Performance'
                    })}
                  >
                    <div className="relative aspect-video">
                      <img
                        src={flashImage}
                        alt="Flash Performance"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <VideoCameraIcon className="w-16 h-16 text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Flash Performance</h3>
                      <p className="text-gray-600 dark:text-gray-300">Watch my flash performance video.</p>
                    </div>
                  </motion.div>

                  {/* Video Card 2 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => setSelectedVideo({
                      src: walkingVideo,
                      title: 'Walking Showcase'
                    })}
                  >
                    <div className="relative aspect-video">
                      <img
                        src={walkingImage}
                        alt="Walking Showcase"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <VideoCameraIcon className="w-16 h-16 text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Walking Showcase</h3>
                      <p className="text-gray-600 dark:text-gray-300">Check out my walking showcase video.</p>
                    </div>
                  </motion.div>

                  {/* Video Card 3 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => setSelectedVideo({
                      src: speechVideo,
                      title: 'Speech Presentation'
                    })}
                  >
                    <div className="relative aspect-video">
                      <img
                        src={speechImage}
                        alt="Speech Presentation"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <VideoCameraIcon className="w-16 h-16 text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Speech Presentation</h3>
                      <p className="text-gray-600 dark:text-gray-300">Watch my speech presentation video.</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Video Modal */}
              {selectedVideo && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                  onClick={() => setSelectedVideo(null)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl relative"
                    onClick={e => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedVideo(null)}
                      className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
                    >
                      <XMarkIcon className="w-6 h-6" />
                    </button>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{selectedVideo.title}</h3>
                      <div className="aspect-video">
                        <video
                          className="w-full h-full rounded-lg"
                          controls
                          autoPlay
                        >
                          <source src={selectedVideo.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </motion.section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 mt-16">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-4 md:mb-0">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Sachithra. All rights reserved.</p>
                  </div>
                  <div className="flex space-x-6">
                    <a
                      href="https://www.facebook.com/sachithra.wijesinghe.77/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/sach_karon/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a
                      href="https://github.com/Sachithra-228"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sachithra-wijesinghe-5496a5270"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;