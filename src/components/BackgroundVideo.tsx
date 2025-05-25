import { useTheme } from '../contexts/ThemeContext';

interface BackgroundVideoProps {
  videoId: string; // YouTube video ID
}

const BackgroundVideo = ({ videoId }: BackgroundVideoProps) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      <iframe
        className="absolute min-w-full min-h-full object-cover"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
        title="Background Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div 
        className={`absolute inset-0 transition-opacity duration-300 ${
          isDarkMode ? 'bg-black/50' : 'bg-white/30'
        }`}
      />
    </div>
  );
};

export default BackgroundVideo; 