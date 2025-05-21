import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  roles: string[];
}

const Typewriter: React.FC<TypewriterProps> = ({ roles }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Speed in milliseconds

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];
      const updatedText = isDeleting
        ? currentRole.substring(0, displayedText.length - 1)
        : currentRole.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        // Pause at the end of the sentence
        setTimeout(() => setIsDeleting(true), 1000); // Pause for 1 second
      } else if (isDeleting && updatedText === '') {
        // Move to the next role after deleting
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }

      // Adjust typing speed
      if (isDeleting) {
        setTypingSpeed(75); // Deleting faster
      } else if (updatedText === currentRole || updatedText === '') {
        setTypingSpeed(150); // Typing speed
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <div className="Typewriter text-primary-600 dark:text-primary-400 font-semibold h-8 flex items-center">
      {displayedText}
      {/* Optional blinking cursor */}
      <span className="border-r-2 border-primary-600 dark:border-primary-400 animate-pulse ml-1 h-full inline-block"></span>
    </div>
  );
};

export default Typewriter; 