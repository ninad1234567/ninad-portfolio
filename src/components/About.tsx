import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Award, Code2, Rocket, GraduationCap, MapPin, Calendar } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ end, duration = 2, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold gradient-text">
      {prefix}{count}{suffix}
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const stats = [
    {
      icon: Code2,
      value: 4,
      suffix: '+',
      label: 'Major Projects',
      sublabel: 'Full-Stack Applications',
      color: 'from-accent-blue to-accent-cyan',
    },
    {
      icon: Award,
      value: 92,
      suffix: '%',
      label: 'Detection',
      sublabel: 'NSFW Detection in Production',
      color: 'from-accent-cyan to-accent-purple',
    },
    {
      icon: Rocket,
      value: 1,
      suffix: 'st',
      label: 'SIH Winner',
      sublabel: 'Smart India Hackathon',
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  const timeline = [
    {
      year: '2021-2025',
      title: 'B.E. in Information Technology',
      institution: 'St. Francis Institute of Technology',
      location: 'Mumbai, Maharashtra',
      icon: GraduationCap,
    },
    {
      year: '2023',
      title: '1st Place - Smart India Hackathon',
      institution: 'National Level Competition',
      location: 'India',
      icon: Award,
    },
  ];

  return (
    <section id="about" className="section bg-light-bg-secondary dark:bg-dark-bg-secondary/50">
      <div className="container-custom mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              A passionate full-stack developer with a drive to create innovative solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left: Profile Image & Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative group">
                <div className="relative w-64 h-64 mx-auto lg:mx-0">
                  {/* Profile Photo */}
                  <motion.img
                    src="/ninadimg1.jpg"
                    alt="Ninad Kangandul - Full-Stack Developer"
                    loading="lazy"
                    className="w-full h-full rounded-full object-cover border-4 border-accent-blue/20 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-light-text-secondary dark:text-dark-text-secondary">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Mumbai, Maharashtra</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-light-text-secondary dark:text-dark-text-secondary">
                  <Calendar className="w-5 h-5 text-accent-cyan" />
                  <span>2025 graduate</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Bio & Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  Full-stack developer specialized in AI/ML applications and real-time systems. 
                  Built 4+ production projects including SentinelGuard (92% NSFW detection, Paranox Top 75 ranking). 
                  Proficient in Flutter, React, Python, and Firebase with proven expertise in performance 
                  optimization and scalable architectures.
                </p>
                <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  As a problem solver at heart, I've developed multiple production-ready applications 
                  including event management systems, networking platforms, and AI-powered parental control apps. 
                  My work combines technical excellence with user-centric design, focusing on real-time 
                  communication, WebSocket integration, and sub-500ms API response times.
                </p>
                <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  Winner of Smart India Hackathon 2023, I'm passionate about leveraging technology to 
                  solve real-world problems and create meaningful impact through code. Currently seeking 
                  junior software developer or associate roles where I can contribute to innovative projects.
                </p>
              </div>

              {/* Skills Preview */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Core Competencies</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Full-Stack Web Development',
                    'AI/ML Model Integration',
                    'Cross-Platform Mobile (Flutter)',
                    'Real-time Systems',
                    'Performance Optimization',
                    'Microservices Architecture',
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan" />
                      <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card relative overflow-hidden group"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <stat.icon className="w-10 h-10 text-accent-blue" />
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.2,
                        }}
                      >
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} opacity-20`} />
                      </motion.div>
                    </div>
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                    />
                    <p className="text-light-text dark:text-dark-text mt-2 font-bold">
                      {stat.label}
                    </p>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mt-1">
                      {stat.sublabel}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Education & <span className="gradient-text">Milestones</span>
            </h3>
            <div className="space-y-6 max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 1.2 + index * 0.2 }}
                  className="relative pl-8 border-l-2 border-accent-blue/30"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-blue"
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        '0 0 0 0 rgba(59, 130, 246, 0.4)',
                        '0 0 0 10px rgba(59, 130, 246, 0)',
                        '0 0 0 0 rgba(59, 130, 246, 0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3,
                    }}
                  />
                  
                  <div className="card hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent-blue/10 rounded-lg">
                        <item.icon className="w-6 h-6 text-accent-blue" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-full text-sm font-semibold">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary">
                          {item.institution}
                        </p>
                        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
