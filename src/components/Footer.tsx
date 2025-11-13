import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, ArrowUp } from 'lucide-react';
import { scrollToElement } from '../lib/utils';

/**
 * Social link interface
 */
interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: React.ElementType;
  available: boolean;
}

/**
 * Social links data
 */
const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/ninad1234567',
    icon: Github,
    available: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ninadkangandul/',
    icon: Linkedin,
    available: true,
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    href: 'https://leetcode.com/u/Ninad_/',
    icon: Code2,
    available: true,
  },
];

/**
 * Quick navigation links
 */
const quickLinks = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Achievements', href: 'achievements' },
  { name: 'Contact', href: 'contact' },
];

/**
 * Main Footer Component
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-light-bg-secondary dark:bg-dark-bg-secondary border-t border-gray-200 dark:border-gray-800">
      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleScrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>

      <div className="container-custom mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-3">
              <span className="gradient-text">Ninad Kangandul</span>
            </h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mb-4">
              Full-Stack Developer passionate about building innovative web
              applications and solving real-world problems.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 text-light-text dark:text-dark-text">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToElement(link.href)}
                    className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-blue transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4 text-light-text dark:text-dark-text">
              Connect With Me
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.id}
                    href={social.available ? social.href : undefined}
                    target={social.available ? '_blank' : undefined}
                    rel={social.available ? 'noopener noreferrer' : undefined}
                    whileHover={social.available ? { scale: 1.1, y: -3 } : {}}
                    whileTap={social.available ? { scale: 0.9 } : {}}
                    className={`w-12 h-12 rounded-lg bg-light-bg dark:bg-dark-bg flex items-center justify-center transition-all ${
                      social.available
                        ? 'hover:bg-accent-blue/10 cursor-pointer'
                        : 'opacity-50 cursor-not-allowed'
                    }`}
                    aria-label={social.label}
                    title={social.available ? social.label : `${social.label} (Coming Soon)`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-light-text-secondary dark:text-dark-text-secondary"
        >
          {/* Copyright */}
          <p>
            © {currentYear}{' '}
            <span className="font-semibold text-light-text dark:text-dark-text">
              Ninad Kangandul
            </span>
            . All rights reserved.
          </p>

          {/* Tech Stack */}
          <p className="text-center md:text-right">
            Built with{' '}
            <span className="font-semibold text-accent-blue">React</span>,{' '}
            <span className="font-semibold text-accent-cyan">Tailwind CSS</span>,{' '}
            <span className="font-semibold text-accent-purple">Framer Motion</span>{' '}
            &{' '}
            <span className="font-semibold text-accent-blue">TypeScript</span>
          </p>
        </motion.div>

        {/* Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
            🚀 Designed & Developed with attention to detail
          </p>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl" />
      </div>
    </footer>
  );
}
