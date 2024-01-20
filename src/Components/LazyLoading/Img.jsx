import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef();

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
      intersectionObserver.unobserve(imageRef.current);
    }
  };

  const intersectionObserver = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  useEffect(() => {
    intersectionObserver.observe(imageRef.current);
    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <>
    <img
      ref={imageRef}
      src={isVisible ? src : ''}
      alt={alt}
      className="card-img-top"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s' }}
    />
    </>
   
  );
};

export default LazyImage;
