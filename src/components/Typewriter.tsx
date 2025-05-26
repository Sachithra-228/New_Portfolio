import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  roles: string[];
  className?: string;
}

const Typewriter = ({ roles, className = '' }: TypewriterProps) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentRole] = roles;

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    if (!currentRole) return;

    const typeSpeed = isDeleting ? 50 : 150;
    const deleteSpeed = 50;
    const pauseTime = 1000;

    const handleTyping = () => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }

      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      const delta = isDeleting ? -1 : 1;
      setCurrentText((prev) => currentRole.substring(0, prev.length + delta));
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <span className="animate-blink">|</span>
    </motion.span>
  );
};

export default Typewriter; 