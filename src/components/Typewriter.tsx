
import { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  className?: string;
}

const Typewriter = ({ words, className = "" }: TypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
          setTypeSpeed(150);
        } else {
          setTypeSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
          setTypeSpeed(100);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-emerald-400">|</span>
    </span>
  );
};

export default Typewriter;
