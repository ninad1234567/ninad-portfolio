import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Target, Calendar, MapPin } from 'lucide-react';

/**
 * Achievement interface
 */
interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  position: string;
}

/**
 * Achievements data
 */
const achievementsData: Achievement[] = [
  {
    id: 'sih-2023',
    title: 'Smart India Hackathon 2023',
    organization: 'Government of India',
    date: 'December 2023',
    description:
      'Secured 1st Place in the prestigious Smart India Hackathon, competing against thousands of teams nationwide. Developed an innovative solution addressing real-world problems.',
    icon: Trophy,
    gradient: 'from-yellow-400 via-yellow-500 to-orange-500',
    position: '🏆 1st Place Winner',
  },
  {
    id: 'colloquium-2023',
    title: 'Colloquium 2023',
    organization: 'St. Francis Institute of Technology',
    date: 'October 2023',
    description:
      'Awarded 4th Place at SFIT\'s Colloquium 2023 for presenting an outstanding project demonstrating technical excellence and innovation.',
    icon: Award,
    gradient: 'from-purple-400 via-purple-500 to-pink-500',
    position: '🏅 4th Place',
  },
  {
    id: 'vcet-hackathon',
    title: 'VCET National Level Hackathon',
    organization: 'Vidyavardhini\'s College of Engineering',
    date: 'March 2023',
    description:
      'Participated in an intensive 36-hour national-level hackathon, collaborating with a team to build a functional prototype under time constraints.',
    icon: Target,
    gradient: 'from-blue-400 via-blue-500 to-cyan-500',
    position: '📍 Participant',
  },
];

/**
 * Achievement Card Component
 */
interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

function AchievementCard({ achievement, index }: AchievementCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = achievement.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.8, y: 50 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        type: 'spring',
        stiffness: 100,
      }}
      className="achievement-card-wrapper"
    >
      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        className="achievement-card relative glass rounded-2xl overflow-hidden group"
      >
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
        />

        {/* Animated Icon */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${achievement.gradient} mb-6 shadow-lg`}
        >
          <Icon className="w-10 h-10 text-white" />
        </motion.div>

        {/* Position Badge */}
        <div className="mb-4">
          <span
            className={`inline-block px-4 py-2 bg-gradient-to-r ${achievement.gradient} text-white text-sm font-bold rounded-full shadow-md`}
          >
            {achievement.position}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-2 text-light-text dark:text-dark-text">
          {achievement.title}
        </h3>

        {/* Organization */}
        <div className="flex items-center gap-2 mb-3 text-light-text-secondary dark:text-dark-text-secondary">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">{achievement.organization}</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 mb-4 text-light-text-secondary dark:text-dark-text-secondary">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{achievement.date}</span>
        </div>

        {/* Description */}
        <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
          {achievement.description}
        </p>

        {/* Decorative Corner */}
        <div
          className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${achievement.gradient} opacity-10 rounded-full blur-2xl`}
        />
      </motion.div>
    </motion.div>
  );
}

/**
 * Main Achievements Section Component
 */
export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="achievements"
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
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            Celebrating milestones and recognition earned through dedication and
            innovation
          </p>
        </motion.div>

        {/* Achievements Timeline - Vertical Flowchart */}
        <div className="achievements-container">
          {achievementsData.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { label: 'National Hackathons', value: '3', icon: Trophy },
            { label: 'Awards Won', value: '2', icon: Award },
            { label: 'Competition Hours', value: '72+', icon: Target },
          ].map((stat) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="card text-center"
              >
                <StatIcon className="w-8 h-8 text-accent-blue mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
