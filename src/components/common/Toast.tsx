import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ToastVariant = 'success' | 'error';

interface ToastProps {
  isOpen: boolean;
  message: string;
  variant?: ToastVariant;
  onClose?: () => void;
}

const variantStyles: Record<ToastVariant, string> = {
  success: 'bg-emerald-500 text-white',
  error: 'bg-red-500 text-white',
};

export function Toast({ isOpen, message, variant = 'success', onClose }: ToastProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const timeout = setTimeout(() => {
      onClose?.();
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen, onClose]);

  return (
    <div className="pointer-events-none fixed top-4 right-4 z-[9999]" aria-live="polite">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            role="status"
            className={`pointer-events-auto min-w-[200px] rounded-xl px-4 py-3 shadow-lg ${variantStyles[variant]}`}
          >
            <span className="font-medium">{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

