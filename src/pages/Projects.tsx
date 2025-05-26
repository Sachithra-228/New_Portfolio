import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  HeartIcon, 
  ShareIcon, 
  EnvelopeIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

// Import project images
import todoAppImage from '../images/todoapp.jpg';
import quizAppImage from '../images/quizapp.jpg';
import votingSystemImage from '../images/votingsystem.jpg';
import financeTrackerImage from '../images/financetracker.jpg';
import womanSafetyTrackerImage from '../images/womansafetytrackerapp.jpg';
import musicTrackerImage from '../images/musictrack.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  image: string;
  type: 'web' | 'app' | 'tool';
  updates: {
    recent: string[];
    versions: { version: string; notes: string }[];
    planned: string[];
    bugFixes: string[];
  };
}

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'app' | 'tool'>('all');
  const [savedProjects, setSavedProjects] = useState<number[]>([]);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [showShareModal, setShowShareModal] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Simple Todo App",
      description: "A modern, responsive todo application with drag-and-drop functionality and real-time updates. Built with React and styled with Tailwind CSS.",
      technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Firebase'],
      demoLink: "https://todo-app-demo.com",
      githubLink: "https://github.com/sachithra-228/simple-todo-app",
      image: todoAppImage,
      type: 'web',
      updates: {
        recent: [
          "Added dark mode support",
          "Implemented drag-and-drop functionality"
        ],
        versions: [
          { version: "1.2.0", notes: "Added dark mode and drag-drop features" },
          { version: "1.1.0", notes: "Added user authentication" },
          { version: "1.0.0", notes: "Initial release" }
        ],
        planned: [
          "Add offline support",
          "Implement task categories",
          "Add progress tracking"
        ],
        bugFixes: [
          "Fixed mobile responsiveness issues",
          "Resolved drag-drop bugs on touch devices"
        ]
      }
    },
    {
      id: 2,
      title: "Quiz App",
      description: "An interactive quiz platform with multiple categories, real-time scoring, and detailed analytics. Features include custom quiz creation and leaderboards.",
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      demoLink: "https://quiz-app-demo.com",
      githubLink: "https://github.com/sachithra-228/quiz-app",
      image: quizAppImage,
      type: 'web',
      updates: {
        recent: [
          "Added real-time multiplayer support",
          "Implemented detailed analytics dashboard"
        ],
        versions: [
          { version: "2.1.0", notes: "Added multiplayer functionality" },
          { version: "2.0.0", notes: "Complete UI overhaul" },
          { version: "1.0.0", notes: "Initial release" }
        ],
        planned: [
          "Add voice questions support",
          "Implement quiz sharing",
          "Add custom themes"
        ],
        bugFixes: [
          "Fixed scoring calculation issues",
          "Resolved multiplayer synchronization bugs"
        ]
      }
    },
    {
      id: 3,
      title: "People Voting System",
      description: "A system for casting and tracking votes for individuals.",
      technologies: ['Node.js', 'Express', 'Database'],
      demoLink: "",
      githubLink: "https://github.com/sachithra-228/people-voting-system",
      image: votingSystemImage,
      type: 'web',
      updates: {
        recent: [],
        versions: [],
        planned: [],
        bugFixes: []
      }
    },
    {
      id: 4,
      title: "Finance Tracker",
      description: "Track your income and expenses to manage personal finance.",
      technologies: ['React', 'Node.js', 'MongoDB'],
      demoLink: "",
      githubLink: "https://github.com/Sachithra-228/Finance_Tracker.git",
      image: financeTrackerImage,
      type: 'web',
      updates: {
        recent: [],
        versions: [],
        planned: [],
        bugFixes: []
      }
    },
    {
      id: 5,
      title: "Woman Safety Tracker",
      description: "A mobile application designed for woman safety.",
      technologies: ['React Native', 'Firebase'],
      demoLink: "",
      githubLink: "https://www.figma.com/design/SFVaOVW0u7Ybfp2biz4lcn/2025-%E2%80%93-Lab-Exam-01?node-id=0-1&p=f&t=Vf8uLqI4xmtc6B5G-0",
      image: womanSafetyTrackerImage,
      type: 'app',
      updates: {
        recent: [],
        versions: [],
        planned: [],
        bugFixes: []
      }
    },
    {
      id: 6,
      title: "Create Music Tracker",
      description: "An app to track and manage your music.",
      technologies: ['React', 'API'],
      demoLink: "",
      githubLink: "https://www.figma.com/design/12UcrchhyC2A4wfnrocb7F/labexam1?node-id=0-1&p=f&t=DpIJdnfuHObeL07G-0",
      image: musicTrackerImage,
      type: 'app',
      updates: {
        recent: [],
        versions: [],
        planned: [],
        bugFixes: []
      }
    },
  ];

  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.type === filter
  );

  const toggleSaveProject = (projectId: number) => {
    setSavedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const toggleProjectExpansion = (projectId: number) => {
    setExpandedProject(prev => prev === projectId ? null : projectId);
  };

  const shareProject = (project: Project) => {
    const shareData = {
      title: project.title,
      text: project.description,
      url: project.demoLink
    };

    if (navigator.share) {
      navigator.share(shareData);
    } else {
      setShowShareModal(project.id);
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      <Helmet>
        <title>Projects - Sachithra</title>
        <meta name="description" content="Explore my portfolio of web applications, mobile apps, and development tools." />
      </Helmet>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Projects I've Built</h1>

          <div className="flex flex-wrap gap-4 mb-8">
            {(['all', 'web', 'app', 'tool'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === type
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 w-full"
              >
                <div className="relative h-48 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                    className="w-full h-full object-cover"
                />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                <div className="p-6 w-full">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-primary-200 text-xs font-medium px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                      View Demo
                    </a>
                    <button
                      onClick={() => toggleSaveProject(project.id)}
                      className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      {savedProjects.includes(project.id) ? (
                        <HeartIconSolid className="w-5 h-5 text-red-500" />
                      ) : (
                        <HeartIcon className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={() => shareProject(project)}
                      className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <ShareIcon className="w-5 h-5" />
                    </button>
                    <a
                      href={`mailto:your-email@example.com?subject=Collaboration on ${project.title}`}
                      className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <EnvelopeIcon className="w-5 h-5" />
                    </a>
                  </div>

                  <button
                    onClick={() => toggleProjectExpansion(project.id)}
                    className="w-full flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      Project Updates
                    </span>
                    {expandedProject === project.id ? (
                      <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-4 overflow-hidden"
                      >
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            Recent Updates
                          </h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                            {project.updates.recent.map((update, i) => (
                              <li key={i}>{update}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            Version History
                          </h4>
                          <div className="space-y-2">
                            {project.updates.versions.map((version, i) => (
                              <div key={i} className="text-sm">
                                <span className="font-medium text-primary-600 dark:text-primary-400">
                                  v{version.version}
                                </span>
                                <span className="text-gray-600 dark:text-gray-300">
                                  : {version.notes}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            Planned Features
                          </h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                            {project.updates.planned.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            Bug Fixes
                          </h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                            {project.updates.bugFixes.map((fix, i) => (
                              <li key={i}>{fix}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowShareModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Share Project
              </h3>
              <div className="flex gap-4">
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(projects.find(p => p.id === showShareModal)?.title || '')}&url=${encodeURIComponent(projects.find(p => p.id === showShareModal)?.demoLink || '')}`)}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Twitter
                </button>
                <button
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(projects.find(p => p.id === showShareModal)?.demoLink || '')}`)}
                  className="flex-1 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
                >
                  LinkedIn
                </button>
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(projects.find(p => p.id === showShareModal)?.demoLink || '')}`)}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Facebook
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects; 