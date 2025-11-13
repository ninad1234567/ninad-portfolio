import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ExternalLink,
  X,
  Calendar,
  MessageSquare,
  CreditCard,
  Brain,
  MapPin,
  Users,
  Video,
  MessageCircle,
  TrendingUp,
  Bot,
  Zap,
  CheckCircle2,
} from 'lucide-react';

/**
 * Project interface defining the structure of each project
 */
interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  features: string[];
  problemStatement: string;
  solution: string;
  achievements: string[];
  github?: string;
  liveDemo?: string;
  category: string;
  gradient: string;
  image: string;
  imageAlt: string;
}

/**
 * All projects data
 */
const projectsData: Project[] = [
  {
    id: 'sentinelguard',
    title: 'SentinelGuard',
    image: '/sentinalgaurd.jpg',
    imageAlt: 'SentinelGuard - AI Parental Control App',
    shortDescription:
      'AI-powered parental control app with 92% NSFW detection accuracy. Cross-platform Flutter app with Python backend optimized to sub-500ms response time. Top 75 in Paranox National Innovation Competition (1500+ submissions).',
    fullDescription:
      'AI-powered parental monitoring application with 92% NSFW detection accuracy. Built with Flutter for cross-platform deployment and Python backend APIs optimized to sub-500ms response time. Secured Top 75 ranking in Paranox National Innovation Competition (1500+ submissions). Currently scaling microservices architecture to support 1000+ concurrent users.',
    techStack: [
      'Flutter',
      'React',
      'Python',
      'YOLOv8',
      'SQLite',
      'Firebase',
      'Node.js',
      'TensorFlow',
    ],
    features: [
      'On-device YOLOv8 model achieving 92% accuracy with offline functionality',
      'Cross-platform Flutter prototype with web filtering system',
      'Custom kids\' launcher for controlled device access',
      'Local SQLite database for privacy-focused data storage',
      'Python backend APIs optimized for <500ms response time',
      'Microservices architecture designed for enterprise scalability',
      'Real-time monitoring without internet dependency',
      'Parental dashboard with activity insights',
      'App usage tracking and time limits',
      'Content filtering and safe browsing',
    ],
    problemStatement:
      'Parents struggle to monitor children\'s digital activities effectively while respecting privacy. Existing solutions require constant internet connectivity and lack accurate NSFW detection.',
    solution:
      'Developed an AI-powered parental control app using YOLOv8 for on-device NSFW detection with 92% accuracy. Implemented offline functionality with local SQLite storage and optimized Python backend for sub-500ms API responses. Built cross-platform Flutter app with microservices architecture for scalability.',
    achievements: [
      'Achieved 92% NSFW detection accuracy with YOLOv8',
      'Top 75 ranking in Paranox National Innovation Competition (1500+ submissions)',
      'Sub-500ms API response time optimization',
      'Offline functionality with local data storage',
    ],
    category: 'AI/ML Application',
    gradient: 'from-cyan-500 to-blue-600',
    liveDemo: 'https://sentinelguard-website.vercel.app/',
  },
  {
    id: 'bookmyevent',
    title: 'BookMyEvent',
    image: '/BookMyEvent.jpg',
    imageAlt: 'BookMyEvent - Event Management Platform',
    shortDescription:
      'Comprehensive event management system with QR check-ins, real-time chat, and ML-based recommendations for seamless event experiences.',
    fullDescription:
      'A full-stack event management platform that revolutionizes how events are organized and attended. Features automated ticketing, real-time communication, and intelligent event recommendations powered by machine learning.',
    techStack: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'Firebase',
      'Python',
      'Razorpay',
      'Puppeteer',
    ],
    features: [
      'Automated QR check-ins and ticket validation',
      'Real-time chat functionality for attendees',
      'Comprehensive organizer dashboards with analytics',
      'Secure Razorpay payment integration',
      'ML-based event recommendations (Matrix Factorization, TF-IDF)',
      'K-means clustering for user segmentation',
      'Location-aware event suggestions',
      'Puppeteer-based automated data collection',
      'Real-time attendance tracking',
      'Event analytics and reporting',
    ],
    problemStatement:
      'Traditional event management systems lack intelligent recommendations and seamless check-in processes, leading to poor user experience and inefficient event operations.',
    solution:
      'Built a comprehensive platform combining automated QR-based check-ins with ML-powered recommendations. Implemented real-time features for communication and used advanced algorithms for personalized event suggestions based on user preferences and location.',
    achievements: [
      'Reduced check-in time by 70% with QR automation',
      'Achieved 85%+ recommendation accuracy using ML',
      'Processed 1000+ events successfully',
      'Real-time chat with <100ms latency',
    ],
    category: 'Full-Stack Web Application',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'ayusharks',
    title: 'AYUSHARKS',
    image: '/ayusharks.jpg',
    imageAlt: 'AYUSHARKS - AYUSH Networking Platform',
    shortDescription:
      'AYUSH networking platform connecting startups, investors, and mentors with role-based dashboards, real-time video calling, and investment showcasing. Implemented WebSocket-based real-time notifications, Firestore integration, RBAC system, and optimized database queries for sub-second load times.',
    fullDescription:
      'A specialized networking platform for the AYUSH (Ayurveda, Yoga, Unani, Siddha, Homeopathy) sector, facilitating connections between startups, investors, and mentors. Features WebSocket-based real-time communication, scalable Firestore architecture, role-based access control (RBAC) system, and performance-optimized database queries for sub-second load times.',
    techStack: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Firebase',
      'WebRTC',
      'Socket.io',
    ],
    features: [
      'Role-based dashboards for startups, investors, and mentors',
      'Intelligent connection request management',
      'AI-powered mentor recommendation engine',
      'One-to-one messaging system',
      'WebRTC video calling for consultations',
      'Advanced search with filters (domain, stage, location)',
      'Instagram-style product feed with engagement metrics',
      'Investor funding showcase and pitch deck uploads',
      'Real-time notifications',
      'Profile verification system',
    ],
    problemStatement:
      'AYUSH sector startups struggle to find relevant investors and mentors, lacking a dedicated platform for networking and fundraising in this specialized industry.',
    solution:
      'Developed a niche networking platform with role-specific features, intelligent matching algorithms, and integrated video calling. Implemented real-time communication and a social feed to foster community engagement and facilitate meaningful connections.',
    achievements: [
      'Connected 200+ AYUSH startups with investors',
      'Facilitated 50+ mentor-mentee relationships',
      'Enabled video consultations with WebRTC',
      'Built scalable real-time messaging system',
    ],
    category: 'Networking Platform',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'benio',
    title: 'BENIO',
    image: '/benio.jpg',
    imageAlt: 'BENIO - AI Engineering Guidance Chatbot',
    shortDescription:
      'AI-powered engineering guidance chatbot with 90%+ accuracy, providing academic and career guidance through CNN-based intent classification.',
    fullDescription:
      'An intelligent chatbot specifically designed for engineering students, offering academic guidance, career advice, and course recommendations using advanced NLP and deep learning techniques.',
    techStack: [
      'TensorFlow',
      'Keras',
      'NLTK',
      'Flask',
      'Flask-SocketIO',
      'Python',
      'HTML/CSS',
      'JavaScript',
    ],
    features: [
      'CNN-based intent classification with 90%+ accuracy',
      '50+ engineering-specific intents',
      'NLP training pipeline with bag-of-words vectorization',
      'WordNet lemmatization for context awareness',
      'Real-time socket communication',
      'Academic guidance (courses, subjects, projects)',
      'Career path recommendations',
      'Industry trends and insights',
      'Responsive animated UI',
      'Conversation history tracking',
    ],
    problemStatement:
      'Engineering students often lack personalized guidance for academic choices and career planning, with limited access to mentors and counselors.',
    solution:
      'Created an AI chatbot trained on engineering-specific data using CNN for intent classification. Implemented advanced NLP techniques including lemmatization and bag-of-words for accurate understanding of student queries, providing instant, relevant guidance 24/7.',
    achievements: [
      'Achieved 90%+ intent classification accuracy',
      'Trained on 50+ engineering-specific intents',
      'Processed 5000+ student queries',
      'Real-time responses with <500ms latency',
    ],
    category: 'AI/ML Application',
    gradient: 'from-green-500 to-emerald-500',
  },
];

/**
 * Tech badge color mapping
 */
const getTechColor = (tech: string): string => {
  const colorMap: { [key: string]: string } = {
    'React.js': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    React: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    'Node.js': 'bg-green-500/10 text-green-500 border-green-500/20',
    Python: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    Firebase: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    TensorFlow: 'bg-orange-600/10 text-orange-600 border-orange-600/20',
    WebRTC: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    'Tailwind CSS': 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
    Flutter: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
    YOLOv8: 'bg-red-500/10 text-red-500 border-red-500/20',
    SQLite: 'bg-gray-600/10 text-gray-600 border-gray-600/20',
  };
  return colorMap[tech] || 'bg-gray-500/10 text-gray-500 border-gray-500/20';
};

/**
 * Project Card Component
 */
interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: () => void;
}

function ProjectCard({ project, index, onViewDetails }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [showTechModal, setShowTechModal] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group"
    >
      <div className="card overflow-hidden h-full flex flex-col">
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          {!imageError ? (
            <motion.img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white text-center px-4">
                  {project.title}
                </h3>
              </div>
            </div>
          )}
          
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

          {/* Category Badge */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
              {project.category}
            </span>
            {project.id === 'sentinelguard' && (
              <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full animate-pulse">
                LIVE & DEPLOYED
              </span>
            )}
            {project.id === 'ayusharks' && (
              <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                🏆 1st Place - SIH 2023
              </span>
            )}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Short Description */}
          <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 text-xs font-medium rounded-full border ${getTechColor(
                  tech
                )}`}
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTechModal(true);
                }}
                className="px-3 py-1 text-xs font-medium rounded-full border bg-gray-500/10 text-gray-500 border-gray-500/20 hover:bg-accent-blue/10 hover:text-accent-blue hover:border-accent-blue/30 transition-all cursor-pointer"
              >
                +{project.techStack.length - 4} more
              </motion.button>
            )}
          </div>

          {/* View Details Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onViewDetails}
            className="btn btn-primary w-full mt-auto"
          >
            View Details
            <ExternalLink className="w-4 h-4 ml-2 inline" />
          </motion.button>
        </div>
      </div>
    </motion.div>

    {/* Tech Stack Modal */}
    <AnimatePresence>
      {showTechModal && (
        <TechStackModal
          technologies={project.techStack}
          projectTitle={project.title}
          onClose={() => setShowTechModal(false)}
        />
      )}
    </AnimatePresence>
    </>
  );
}

/**
 * Tech Stack Modal Component
 */
interface TechStackModalProps {
  technologies: string[];
  projectTitle: string;
  onClose: () => void;
}

function TechStackModal({ technologies, projectTitle, onClose }: TechStackModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onKeyDown={(e) => e.key === 'Escape' && onClose()}
      tabIndex={0}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-light-bg dark:bg-dark-bg rounded-2xl shadow-2xl p-6 md:p-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <h3 className="text-2xl font-bold mb-2 pr-10">
          <span className="gradient-text">{projectTitle}</span>
        </h3>
        <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
          All Technologies Used
        </p>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`px-4 py-3 text-sm font-medium rounded-lg border ${getTechColor(
                tech
              )} hover:scale-105 transition-transform`}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Project Detail Modal Component
 */
interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const getFeatureIcon = (index: number) => {
    const icons = [
      Calendar,
      MessageSquare,
      CreditCard,
      Brain,
      MapPin,
      Users,
      Video,
      MessageCircle,
      TrendingUp,
      Bot,
      Zap,
      CheckCircle2,
    ];
    return icons[index % icons.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-light-bg dark:bg-dark-bg rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 p-2 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-full hover:bg-accent-blue/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <div
              className={`inline-block px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold rounded-full mb-4`}
            >
              {project.category}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h2>
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary">
              {project.fullDescription}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-red-500">
                ❌ Problem
              </h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                {project.problemStatement}
              </p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-green-500">
                ✅ Solution
              </h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => {
                const Icon = getFeatureIcon(index);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg hover:bg-accent-blue/5 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      {feature}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 text-sm font-medium rounded-lg border ${getTechColor(
                    tech
                  )}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-accent-blue/5 to-accent-cyan/5 rounded-lg border border-accent-blue/20"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">
                    {achievement}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Links - Only show for SentinelGuard */}
          {project.id === 'sentinelguard' && project.liveDemo && (
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Project
              </motion.a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Main Projects Section Component
 */
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="section bg-light-bg-secondary dark:bg-dark-bg-secondary/50"
      ref={ref}
    >
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies and
            best practices
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Projects Completed', value: '4+' },
            { label: 'Technologies Used', value: '15+' },
            { label: 'Lines of Code', value: '50K+' },
            { label: 'National Competition Rankings', value: '2' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="card text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
