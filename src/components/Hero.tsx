import { motion, useReducedMotion } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, Code } from 'lucide-react';
import { scrollToElement } from '../lib/utils';
import { copyToClipboard } from '../utils/clipboard';
import { isMobile } from '../utils/device';
import { Toast } from './common/Toast';
import { EMAIL_ADDRESS, PHONE_NUMBER_DISPLAY, PHONE_NUMBER_DIAL } from '../constants/contact';

export default function Hero() {
  const [toast, setToast] = useState<{ message: string; variant?: 'success' | 'error' } | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleToastClose = useCallback(() => {
    setToast(null);
  }, []);

  const handleEmailClick = useCallback(async () => {
    await copyToClipboard(EMAIL_ADDRESS);
    setToast({ message: 'Email copied to clipboard!' });
  }, []);

  const handlePhoneClick = useCallback(async () => {
    if (isMobile()) {
      window.location.href = `tel:${PHONE_NUMBER_DIAL}`;
      return;
    }

    await copyToClipboard(PHONE_NUMBER_DISPLAY);
    setToast({ message: 'Phone number copied to clipboard!' });
  }, []);

  const quickActions = useMemo(
    () => [
      {
        id: 'github',
        label: 'GitHub',
        icon: Github,
        href: 'https://github.com/ninad1234567',
        ariaLabel: 'GitHub',
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        icon: Linkedin,
        href: 'https://www.linkedin.com/in/ninadkangandul/',
        ariaLabel: 'LinkedIn',
      },
      {
        id: 'leetcode',
        label: 'LeetCode',
        icon: Code,
        href: 'https://leetcode.com/u/Ninad_/',
        ariaLabel: 'LeetCode',
      },
      {
        id: 'email',
        label: 'Copy email',
        icon: Mail,
        onClick: handleEmailClick,
        ariaLabel: 'Copy email',
        title: 'Copy email address',
      },
      {
        id: 'phone',
        label: 'Copy phone',
        icon: Phone,
        onClick: handlePhoneClick,
        ariaLabel: 'Copy phone',
        title: 'Copy phone number',
      },
    ],
    [handleEmailClick, handlePhoneClick],
  );

  const quickActionClass =
    'p-3 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-transparent hover:bg-accent-blue/10 cursor-pointer';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Floating Code Symbols */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-accent-blue/10 dark:text-accent-cyan/10 font-mono text-4xl font-bold"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          >
            {['<>', '{...}', '( )', '[ ]', '< />', '=> '][i]}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 bg-accent-blue/10 text-accent-blue rounded-full text-sm font-semibold mb-4">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Ninad Kangandul</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6"
            >
              <span className="gradient-text">Full-Stack Developer & Problem Solver</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Specialized in AI/ML applications and real-time systems. Built 4+ production projects 
              including SentinelGuard with 92% NSFW detection accuracy. Proficient in Flutter, React, 
              Python, and Firebase. 2025 graduate from SFIT, Mumbai.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToElement('projects')}
                className="btn btn-primary"
              >
                View My Work
              </motion.button>
              <motion.a
                href="/Ninad Resume.pdf"
                download="Ninad_Kangandul_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Download Resume
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToElement('contact')}
                className="btn btn-secondary"
              >
                Get in Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {quickActions.map((action) => {
                const Icon = action.icon;
                const MotionComponent = action.onClick ? motion.button : motion.a;
                const hoverAnimation = prefersReducedMotion
                  ? {}
                  : { scale: 1.1, y: -3 };
                const tapAnimation = prefersReducedMotion ? {} : { scale: 0.9 };

                return (
                  <MotionComponent
                    key={action.id}
                    whileHover={hoverAnimation}
                    whileTap={tapAnimation}
                    href={action.href}
                    target={action.href ? '_blank' : undefined}
                    rel={action.href ? 'noopener noreferrer' : undefined}
                    onClick={action.onClick}
                    className={quickActionClass}
                    aria-label={action.ariaLabel}
                    title={action.title ?? action.label}
                    type={action.onClick ? 'button' : undefined}
                  >
                    <Icon className="w-6 h-6" />
                  </MotionComponent>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Rotating Rings */}
              <motion.div
                className="absolute inset-0 border-4 border-accent-blue/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.div
                className="absolute inset-8 border-4 border-accent-cyan/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.div
                className="absolute inset-16 border-4 border-accent-purple/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-2xl flex items-center justify-center shadow-2xl">
                    <Code className="w-16 h-16 text-white" />
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-2xl blur-xl opacity-50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              </div>

              {/* Floating Tech Icons */}
              {[
                { icon: '⚛️', position: 'top-0 left-1/2 -translate-x-1/2' },
                { icon: '📱', position: 'top-1/4 right-0' },
                { icon: '🚀', position: 'bottom-1/4 right-0' },
                { icon: '💻', position: 'bottom-0 left-1/2 -translate-x-1/2' },
                { icon: '🔥', position: 'bottom-1/4 left-0' },
                { icon: '⚡', position: 'top-1/4 left-0' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${item.position} w-12 h-12 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg flex items-center justify-center text-2xl shadow-lg`}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.2,
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToElement('about')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
      <Toast
        isOpen={Boolean(toast)}
        message={toast?.message ?? ''}
        variant={toast?.variant}
        onClose={handleToastClose}
      />
    </section>
  );
}
