import { useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface BackgroundVideoProps {
  videoSrc: string;
}

const BackgroundVideo = ({ videoSrc }: BackgroundVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      <video
        ref={videoRef}
        className="absolute min-w-full min-h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div 
        className={`absolute inset-0 transition-opacity duration-300 ${
          isDarkMode ? 'bg-black/50' : 'bg-white/30'
        }`}
      />
    </div>
  );
};

export default BackgroundVideo; 