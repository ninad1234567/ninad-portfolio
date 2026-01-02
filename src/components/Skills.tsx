import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Smartphone,
  Server,
  Database,
  Cloud,
  GitBranch,
  Cpu,
  Eye,
  Zap,
  FileCode,
  ExternalLink,
} from 'lucide-react';

/**
 * Skill interface with achievement-focused structure
 */
interface Skill {
  name: string;
  icon: React.ElementType;
  achievement: string; // What you built/accomplished with this skill
  projects: string[]; // Project names that used this skill
  hoverDetails: string[]; // Detailed achievements shown on hover
  category: 'production' | 'specialized' | 'emerging';
}

/**
 * Skill category interface
 */
interface SkillCategory {
  title: string;
  emoji: string;
  description: string;
  skills: Skill[];
}

/**
 * Achievement-focused skills data
 */
const skillsData: SkillCategory[] = [
  {
    title: 'Production-Ready',
    emoji: '🚀',
    description: 'Daily use in shipping products',
    skills: [
      {
        name: 'React.js',
        icon: Code2,
        achievement: 'Architected responsive UIs for 3+ production apps',
        projects: ['BookMyEvent', 'AYUSHARKS', 'BENIO'],
        hoverDetails: [
          '5+ complex components built',
          'Optimized for 10k+ concurrent users',
          'Implemented advanced state management',
          'Performance: 90+ Lighthouse score'
        ],
        category: 'production'
      },
      {
        name: 'Node.js',
        icon: Server,
        achievement: 'Built scalable backends serving 10k+ requests',
        projects: ['BookMyEvent', 'AYUSHARKS', 'SentinelGuard'],
        hoverDetails: [
          'RESTful APIs with proper versioning',
          'Authentication & authorization systems',
          'Database optimization & caching',
          'Real-time WebSocket implementations'
        ],
        category: 'production'
      },
      {
        name: 'JavaScript',
        icon: FileCode,
        achievement: 'Optimized performance by 40% across applications',
        projects: ['BookMyEvent', 'AYUSHARKS', 'BENIO'],
        hoverDetails: [
          'ES6+ modern syntax mastery',
          'Async/await pattern implementation',
          'Memory leak prevention',
          'Bundle size optimization'
        ],
        category: 'production'
      },
      {
        name: 'Firebase',
        icon: Database,
        achievement: 'Scaled from 100 to 10k users without downtime',
        projects: ['BookMyEvent', 'AYUSHARKS'],
        hoverDetails: [
          'Firestore real-time synchronization',
          'Authentication with social providers',
          'Cloud Functions for serverless logic',
          'Automated deployment pipelines'
        ],
        category: 'production'
      },
      {
        name: 'MySQL',
        icon: Database,
        achievement: 'Designed efficient schemas for complex data',
        projects: ['BookMyEvent', 'Enterprise Projects'],
        hoverDetails: [
          'Optimized queries for large datasets',
          'Proper indexing strategies',
          'Relationship modeling',
          'Performance monitoring'
        ],
        category: 'production'
      },
      {
        name: 'Git',
        icon: GitBranch,
        achievement: 'Led team collaboration on enterprise projects',
        projects: ['All Projects', 'Team Workflows'],
        hoverDetails: [
          'Advanced branching strategies',
          'Code review best practices',
          'Merge conflict resolution',
          'CI/CD pipeline integration'
        ],
        category: 'production'
      }
    ]
  },
  {
    title: 'Specialized Skills',
    emoji: '💡',
    description: 'Advanced implementations & unique solutions',
    skills: [
      {
        name: 'Python',
        icon: FileCode,
        achievement: 'Developed ML pipelines for real-time predictions',
        projects: ['AYUSHARKS', 'SentinelGuard', 'ML Projects'],
        hoverDetails: [
          'Machine learning model training',
          'Data processing & analysis',
          'Backend API development',
          'Performance optimization'
        ],
        category: 'specialized'
      },
      {
        name: 'YOLO Object Detection',
        icon: Eye,
        achievement: 'Built real-time detection systems with 95% accuracy',
        projects: ['SentinelGuard', 'Computer Vision'],
        hoverDetails: [
          'Custom model training',
          'Real-time video processing',
          'Edge device deployment',
          'Performance optimization'
        ],
        category: 'specialized'
      },
      {
        name: 'OpenCV',
        icon: Eye,
        achievement: 'Engineered computer vision solutions',
        projects: ['SentinelGuard', 'Image Processing'],
        hoverDetails: [
          'Image preprocessing pipelines',
          'Feature extraction algorithms',
          'Video stream processing',
          'Integration with ML models'
        ],
        category: 'specialized'
      },
      {
        name: 'IoT Development',
        icon: Cpu,
        achievement: 'Orchestrated smart device ecosystems',
        projects: ['Smart Home', 'Monitoring Systems'],
        hoverDetails: [
          'Sensor data collection',
          'Real-time communication protocols',
          'Edge computing implementation',
          'Cloud integration'
        ],
        category: 'specialized'
      },
      {
        name: 'Real-time Systems',
        icon: Zap,
        achievement: 'Deployed monitoring systems with <100ms latency',
        projects: ['SentinelGuard', 'Live Tracking'],
        hoverDetails: [
          'WebSocket implementations',
          'Event-driven architectures',
          'Performance monitoring',
          'Alert system design'
        ],
        category: 'specialized'
      }
    ]
  },
  {
    title: 'Emerging Skills',
    emoji: '🔬',
    description: 'Actively learning & implementing',
    skills: [
      {
        name: 'AWS',
        icon: Cloud,
        achievement: 'Containerized deployment pipelines',
        projects: ['Cloud Migration', 'Scalability'],
        hoverDetails: [
          'EC2 & Lambda functions',
          'S3 storage optimization',
          'Auto-scaling configurations',
          'Cost optimization strategies'
        ],
        category: 'emerging'
      },
      {
        name: 'Flutter',
        icon: Smartphone,
        achievement: 'Developed cross-platform mobile experiences',
        projects: ['Mobile App', 'Cross-platform'],
        hoverDetails: [
          'Responsive UI design',
          'State management with Provider',
          'Native feature integration',
          'Performance optimization'
        ],
        category: 'emerging'
      },
      {
        name: 'Express.js',
        icon: Server,
        achievement: 'Built 20+ endpoints with proper versioning',
        projects: ['API Development', 'Microservices'],
        hoverDetails: [
          'Middleware implementation',
          'Error handling strategies',
          'API documentation',
          'Security best practices'
        ],
        category: 'emerging'
      }
    ]
  }
];

/**
 * Get color scheme based on skill category
 */
const getCategoryColors = (category: 'production' | 'specialized' | 'emerging') => {
  switch (category) {
    case 'production':
      return {
        gradient: 'from-emerald-500 to-green-500',
        glow: 'from-emerald-400 to-green-400',
        accent: 'text-emerald-400'
      };
    case 'specialized':
      return {
        gradient: 'from-blue-500 to-cyan-500',
        glow: 'from-blue-400 to-cyan-400',
        accent: 'text-cyan-400'
      };
    case 'emerging':
      return {
        gradient: 'from-purple-500 to-pink-500',
        glow: 'from-purple-400 to-pink-400',
        accent: 'text-purple-400'
      };
  }
};

/**
 * Achievement-focused Skill Card Component
 */
interface SkillCardProps {
  skill: Skill;
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = skill.icon;
  const colors = getCategoryColors(skill.category);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative skill-card-container"
    >
      {/* Main Card with Responsive Behavior */}
      <div className="skill-card glass relative rounded-xl border border-transparent">
        {/* Animated Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 transition-all duration-300`}
        />

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Header: Icon + Skill Name */}
          <div className="flex items-center gap-4 mb-4">
            <motion.div 
              className="skill-icon p-3 bg-light-bg dark:bg-dark-bg rounded-lg"
              transition={{ duration: 0.2 }}
            >
              <Icon className={`w-6 h-6 ${colors.accent}`} />
            </motion.div>
            <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
              {skill.name}
            </h3>
          </div>

          {/* Achievement Statement */}
          <div className="mb-4">
            <p className="text-base text-light-text-secondary dark:text-dark-text-secondary font-medium leading-relaxed">
              "{skill.achievement}"
            </p>
          </div>

          {/* Project Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {skill.projects.map((project, idx) => (
              <span
                key={idx}
                className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${colors.gradient} text-white font-medium shadow-sm transition-shadow duration-200`}
              >
                {project}
              </span>
            ))}
          </div>

          {/* Details Section - Hidden on Desktop, Always Visible on Mobile */}
          <div className="card-details">
            <div className="border-t border-light-text-secondary/20 dark:border-dark-text-secondary/20 pt-4">
              <div className="flex items-center gap-2 mb-3">
                <ExternalLink className="w-4 h-4 text-accent-blue" />
                <span className="text-sm font-semibold text-light-text dark:text-dark-text">
                  Key Achievements:
                </span>
              </div>
              <ul className="space-y-2">
                {skill.hoverDetails.map((detail, idx) => (
                  <li key={idx} className="text-sm text-light-text-secondary dark:text-dark-text-secondary flex items-start gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.gradient} mt-2 flex-shrink-0`} />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div
          className={`skill-glow absolute -inset-1 bg-gradient-to-r ${colors.glow} rounded-xl blur-lg opacity-0 transition-opacity duration-300`}
          style={{ zIndex: -1 }}
        />
      </div>
    </motion.div>
  );
}

/**
 * Main Skills Section Component - "Technical Arsenal"
 */
export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      className="section bg-light-bg dark:bg-dark-bg"
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
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
            Each skill tells a story of what I've shipped. Real projects, measurable impact, production-ready solutions.
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="space-y-20">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{category.emoji}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-light-text dark:text-dark-text">
                    {category.title}
                  </h3>
                </div>
                <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg ml-12">
                  {category.description}
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full ml-12 mt-3" />
              </div>

              {/* Skills Grid - Perfectly Symmetric Responsive Layout */}
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={categoryIndex * 3 + skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6">
              Built for Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Production Apps', value: '5+', description: 'Live & scaling' },
                { label: 'Technologies', value: '15+', description: 'Production-ready' },
                { label: 'Years Building', value: '4+', description: 'Continuous growth' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-light-text dark:text-dark-text mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
