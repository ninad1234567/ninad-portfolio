import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Layout,
  Smartphone,
  Server,
  Database,
  Cloud,
  GitBranch,
  Terminal,
  Cpu,
  Eye,
  Zap,
  FileCode,
} from 'lucide-react';

/**
 * Skill interface defining the structure of each skill
 */
interface Skill {
  name: string;
  level: 'expert' | 'proficient' | 'intermediate';
  icon: React.ElementType;
  description: string; // Where/how this skill is used
}

/**
 * Skill category interface
 */
interface SkillCategory {
  title: string;
  skills: Skill[];
}

/**
 * All skills data organized by categories
 */
const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 'expert', icon: Code2, description: 'Used in all web projects & production apps' },
      { name: 'Responsive Design', level: 'expert', icon: Layout, description: 'Mobile-first design for all projects' },
      { name: 'AJAX', level: 'proficient', icon: Zap, description: 'Async data handling in web apps' },
      { name: 'Bootstrap', level: 'expert', icon: Smartphone, description: 'Rapid UI development & prototyping' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 'expert', icon: Server, description: 'Backend for production applications' },
      { name: 'Express.js', level: 'expert', icon: Server, description: 'RESTful API development' },
      { name: 'Flask', level: 'proficient', icon: Server, description: 'Python web services & APIs' },
      { name: 'RESTful APIs', level: 'expert', icon: Code2, description: 'API design & implementation' },
    ],
  },
  {
    title: 'Databases & Storage',
    skills: [
      { name: 'Firebase', level: 'expert', icon: Database, description: 'Real-time databases & authentication' },
      { name: 'MongoDB', level: 'proficient', icon: Database, description: 'NoSQL database management' },
      { name: 'MySQL', level: 'expert', icon: Database, description: 'Relational database design & queries' },
    ],
  },
  {
    title: 'Cloud & Tools',
    skills: [
      { name: 'AWS', level: 'proficient', icon: Cloud, description: 'Cloud deployment & services' },
      { name: 'Git/GitHub', level: 'expert', icon: GitBranch, description: 'Version control & collaboration' },
      { name: 'VS Code', level: 'expert', icon: Terminal, description: 'Daily development environment' },
    ],
  },
  {
    title: 'Specialized Technologies',
    skills: [
      { name: 'IoT Development', level: 'proficient', icon: Cpu, description: 'Smart device integration' },
      { name: 'OpenCV', level: 'proficient', icon: Eye, description: 'Computer vision applications' },
      { name: 'YOLO Object Detection', level: 'expert', icon: Eye, description: 'Real-time object detection systems' },
      { name: 'CNN/Computer Vision', level: 'proficient', icon: Eye, description: 'Deep learning for image processing' },
      { name: 'Real-time Monitoring Systems', level: 'expert', icon: Zap, description: 'Live data tracking & alerts' },
      { name: 'Python Backend Optimization', level: 'expert', icon: Server, description: 'Performance tuning & scaling' },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 'expert', icon: FileCode, description: 'Primary language for ML & backend' },
      { name: 'Java', level: 'expert', icon: FileCode, description: 'Object-oriented programming' },
      { name: 'JavaScript', level: 'expert', icon: FileCode, description: 'Full-stack web development' },
      { name: 'SQL', level: 'expert', icon: FileCode, description: 'Database queries & optimization' },
    ],
  },
];

/**
 * Get color class based on skill level
 * Green: Expert
 * Blue: Proficient
 * Yellow: Intermediate
 */
const getSkillColor = (level: 'expert' | 'proficient' | 'intermediate'): string => {
  if (level === 'expert') return 'from-emerald-500 to-green-500';
  if (level === 'proficient') return 'from-blue-500 to-cyan-500';
  return 'from-yellow-500 to-amber-500';
};

/**
 * Get skill level label with emoji badge
 */
const getSkillLabel = (level: 'expert' | 'proficient' | 'intermediate'): string => {
  if (level === 'expert') return '🟢 Expert';
  if (level === 'proficient') return '🔵 Proficient';
  return '🟡 Intermediate';
};

/**
 * Individual Skill Card Component
 */
interface SkillCardProps {
  skill: Skill;
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = skill.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative"
    >
      {/* Glassmorphism Card */}
      <div className="glass relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:shadow-2xl">
        {/* Background Gradient on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${getSkillColor(
            skill.level
          )} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon and Skill Name */}
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-light-bg dark:bg-dark-bg rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-accent-blue" />
            </div>
            <h3 className="text-lg font-bold text-light-text dark:text-dark-text">
              {skill.name}
            </h3>
          </div>

          {/* Expertise Badge */}
          <div className="flex items-center justify-between mb-3">
            <span
              className={`text-sm font-bold px-4 py-2 rounded-full bg-gradient-to-r ${getSkillColor(
                skill.level
              )} text-white shadow-lg`}
            >
              {getSkillLabel(skill.level)}
            </span>
          </div>

          {/* Description - Shows on hover */}
          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary italic">
              {skill.description}
            </p>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className={`absolute -inset-1 bg-gradient-to-r ${getSkillColor(
            skill.level
          )} rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
          style={{ zIndex: -1 }}
        />
      </div>
    </motion.div>
  );
}

/**
 * Main Skills Section Component
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="space-y-16">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category Title */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-light-text dark:text-dark-text mb-2">
                  {category.title}
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={categoryIndex * 4 + skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Total Skills', value: '24+' },
            { label: 'Expert Level', value: '10' },
            { label: 'Categories', value: '6' },
            { label: 'Years Learning', value: '4+' },
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

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {[
            { label: '🟢 Expert', description: 'Daily use in production', color: 'from-emerald-500 to-green-500' },
            { label: '🔵 Proficient', description: 'Strong working knowledge', color: 'from-blue-500 to-cyan-500' },
            { label: '🟡 Intermediate', description: 'Practical experience', color: 'from-yellow-500 to-amber-500' },
          ].map((level) => (
            <div key={level.label} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${level.color}`} />
              <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                <span className="font-semibold text-light-text dark:text-dark-text">
                  {level.label}
                </span>{' '}
                - {level.description}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
