import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, Code2, ExternalLink } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';
import { isMobile } from '../utils/device';
import { Toast } from './common/Toast';
import { EMAIL_ADDRESS, MAILTO_LINK, PHONE_NUMBER_DIAL, PHONE_NUMBER_DISPLAY } from '../constants/contact';

/**
 * Contact method interface
 */
interface ContactMethod {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon: React.ElementType;
  gradient: string;
  available: boolean;
  onClick?: () => void | Promise<void>;
  hint?: string;
  title?: string;
  ariaLabel?: string;
  secondaryAction?: {
    label: string;
    onClick: () => void;
    ariaLabel?: string;
    title?: string;
  };
}

/**
 * Contact Button Component
 */
interface ContactButtonProps {
  method: ContactMethod;
  index: number;
}

function ContactButton({ method, index }: ContactButtonProps) {
  const Icon = method.icon;
  const prefersReducedMotion = useReducedMotion();

  const sharedContent = (
    <>
      <div
        className={`absolute inset-0 bg-gradient-to-br ${method.gradient} ${
          method.available ? 'opacity-10 group-hover:opacity-20' : 'opacity-5'
        } transition-opacity duration-300`}
        aria-hidden="true"
      />

      <div className="absolute inset-0 glass" aria-hidden="true" />

      <div className="contact-card-content relative z-10 flex items-center gap-4 h-full">
        <motion.div
          whileHover={
            method.available && !prefersReducedMotion ? { rotate: 360 } : undefined
          }
          transition={{ duration: 0.6 }}
          className={`contact-card-icon flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${method.gradient} shadow-lg`}
          aria-hidden="true"
        >
          <Icon className="h-7 w-7 text-white" />
        </motion.div>

        <div className="flex-1 min-w-0">
          <div className="contact-card-label text-sm font-semibold text-light-text-secondary dark:text-dark-text-secondary">
            {method.label}
          </div>
          <div className="contact-card-value text-lg font-bold text-light-text dark:text-dark-text">
            {method.value}
          </div>
          {method.hint && (
            <div className="mt-1 text-xs text-light-text-secondary dark:text-dark-text-secondary opacity-75">
              {method.hint}
            </div>
          )}
          {method.secondaryAction && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                method.secondaryAction?.onClick();
              }}
              className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-accent-blue underline-offset-4 transition hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              aria-label={method.secondaryAction.ariaLabel}
              title={method.secondaryAction.title}
            >
              {method.secondaryAction.label}
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {method.available && (
        <div
          className={`absolute -inset-1 -z-10 bg-gradient-to-br ${method.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (method.onClick) {
    return (
      <div className="relative">
        <motion.button
          type="button"
          onClick={method.onClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={
            method.available && !prefersReducedMotion ? { scale: 1.05, y: -5 } : undefined
          }
          whileTap={
            method.available && !prefersReducedMotion ? { scale: 0.97 } : undefined
          }
          className={`contact-card group relative block w-full overflow-hidden rounded-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
            method.available ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'
          }`}
          aria-label={method.ariaLabel ?? `Copy ${method.label.toLowerCase()}`}
          title={method.title ?? method.label}
        >
          {sharedContent}
        </motion.button>
      </div>
    );
  }

  return (
    <div className="relative">
      <motion.a
        href={method.available ? method.href : undefined}
        target={method.href ? '_blank' : undefined}
        rel={method.href ? 'noopener noreferrer' : undefined}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={
          method.available && !prefersReducedMotion ? { scale: 1.05, y: -5 } : undefined
        }
        whileTap={method.available && !prefersReducedMotion ? { scale: 0.97 } : undefined}
        className={`contact-card group relative block w-full overflow-hidden rounded-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
          method.available ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'
        }`}
        aria-label={method.ariaLabel ?? `Contact via ${method.label}`}
        title={method.title ?? method.label}
      >
        {sharedContent}
      </motion.a>
    </div>
  );
}

/**
 * Main Contact Section Component
 */
export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [toast, setToast] = useState<{ message: string; variant?: 'success' | 'error' } | null>(null);

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

  const handleOpenMail = useCallback(() => {
    window.open(MAILTO_LINK, '_blank', 'noopener,noreferrer');
  }, []);

  const contactMethods = useMemo<ContactMethod[]>(
    () => [
      {
        id: 'email',
        label: 'Email',
        value: EMAIL_ADDRESS,
        icon: Mail,
        gradient: 'from-blue-500 to-cyan-500',
        available: true,
        onClick: handleEmailClick,
        hint: 'Click to copy · Open mail app',
        title: 'Copy email address',
        ariaLabel: 'Copy email',
        secondaryAction: {
          label: 'Open mail',
          onClick: handleOpenMail,
          ariaLabel: 'Open mail app for email',
          title: 'Open your mail application',
        },
      },
      {
        id: 'phone',
        label: 'Phone',
        value: PHONE_NUMBER_DISPLAY,
        icon: Phone,
        gradient: 'from-green-500 to-emerald-500',
        available: true,
        onClick: handlePhoneClick,
        hint: 'Click to copy · Tap to call on mobile',
        title: 'Copy phone number',
        ariaLabel: 'Copy phone',
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        value: 'Connect on LinkedIn',
        href: 'https://www.linkedin.com/in/ninadkangandul/',
        icon: Linkedin,
        gradient: 'from-blue-600 to-blue-700',
        available: true,
        title: 'Open LinkedIn profile',
      },
      {
        id: 'github',
        label: 'GitHub',
        value: 'View GitHub Profile',
        href: 'https://github.com/ninad1234567',
        icon: Github,
        gradient: 'from-gray-700 to-gray-900',
        available: true,
        title: 'Open GitHub profile',
      },
      {
        id: 'leetcode',
        label: 'LeetCode',
        value: 'Check LeetCode Profile',
        href: 'https://leetcode.com/u/Ninad_/',
        icon: Code2,
        gradient: 'from-orange-500 to-yellow-500',
        available: true,
        title: 'Open LeetCode profile',
      },
    ],
    [handleEmailClick, handleOpenMail, handlePhoneClick],
  );

  const handleToastClose = useCallback(() => {
    setToast(null);
  }, []);

  return (
    <section
      id="contact"
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
            Let's Build Something{' '}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out
            through any of these channels
          </p>
        </motion.div>

        {/* Contact Methods Grid - Perfectly Symmetric */}
        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <ContactButton key={method.id} method={method} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-light-text-secondary dark:text-dark-text-secondary">
            📍 Based in <span className="font-semibold">Mumbai, Maharashtra</span> | 
            🎓 <span className="font-semibold">2025 graduate</span> from SFIT
          </p>
        </motion.div>
      </div>
      <Toast
        isOpen={Boolean(toast)}
        message={toast?.message ?? ''}
        variant={toast?.variant}
        onClose={handleToastClose}
      />
    </section>
  );
}
