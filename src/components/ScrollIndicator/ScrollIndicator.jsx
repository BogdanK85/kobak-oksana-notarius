import { useEffect } from 'react';
import { useState } from 'react';
import { ProgressBar, ProgressContainer } from './ScrollIndicator.styled';

const ScrollIndicator = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const scrollProgressCheker = () => {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      let scrolled = (winScroll / height) * 100;
      setWidth(scrolled);
    };

    window.addEventListener('scroll', scrollProgressCheker);

    return () => window.removeEventListener('scroll', scrollProgressCheker);
  }, []);

  return (
    <ProgressContainer>
      <ProgressBar style={{ width: `${width}%` }} />
    </ProgressContainer>
  );
};

export default ScrollIndicator;
