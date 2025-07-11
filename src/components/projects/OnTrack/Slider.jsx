import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CalendarViewMonth from "./../../../assets/OnTrack/CalendarViewMonth.png";
import CalendarWeek from "./../../../assets/OnTrack/CalendarWeek.png";
import LoginPage from "./../../../assets/OnTrack/LoginPage.png";
import ManageEvent from "./../../../assets/OnTrack/ManageEvent.png";
import NewEvent from "./../../../assets/OnTrack/newEvent.png";
import RichTextEditor from "./../../../assets/OnTrack/RichTextEditor.png";
import SignupPage from "./../../../assets/OnTrack/SignupPage.png";

const images = [
  CalendarViewMonth,
  CalendarWeek,
  LoginPage,
  ManageEvent,
  NewEvent,
  RichTextEditor,
  SignupPage,
];

const FullscreenSliderContent = ({ currentIndex, images, nextImage, prevImage, setCurrentIndex, onClose }) => {
  const sliderVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl z-50 focus:outline-none"
        aria-label="Close fullscreen"
      >
        &times;
      </button>

      <div className="relative w-full h-full max-w-screen-xl max-h-screen-xl flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`On Track Screenshot ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain"
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </AnimatePresence>

        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-20 text-cyan-500 p-3 rounded-full focus:outline-none hover:bg-opacity-40 transition-colors"
          aria-label="Previous image"
        >
          &#9664;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-20 text-cyan-500 p-3 rounded-full focus:outline-none hover:bg-opacity-40 transition-colors"
          aria-label="Next image"
        >
          &#9654;
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-cyan-500' : 'bg-gray-400'
                }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            ></span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openFullscreen = (index) => {
    setCurrentImageIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isFullscreen) {
        if (event.key === 'ArrowRight') {
          nextImage();
        } else if (event.key === 'ArrowLeft') {
          prevImage();
        } else if (event.key === 'Escape') {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, nextImage, prevImage, closeFullscreen]);

  return (
    <>
      <div
        className="relative w-full bg-gray-200/20 backdrop-blur-2xl h-80 md:h-96 rounded-lg shadow-lg overflow-hidden flex items-center justify-center cursor-pointer group"
        onClick={() => openFullscreen(currentImageIndex)}
      >
        <img
          src={images[currentImageIndex]}
          alt={`On Track Screenshot ${currentImageIndex + 1}`}
          className="w-full h-full object-contain"
        />
        <button
          onClick={(e) => { e.stopPropagation(); prevImage(); }}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r-lg focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
        >
          &#9664;
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); nextImage(); }}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l-lg focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
        >
          &#9654;
        </button>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-cyan-500' : 'bg-gray-400'
                }`}
              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
            ></span>
          ))}
        </div>
        <div className="absolute bottom-2 right-2 text-white text-sm bg-black bg-opacity-70 px-2 py-1 rounded">
          Click to Enlarge
        </div>
      </div>

      <AnimatePresence>
        {isFullscreen && (
          <FullscreenSliderContent
            images={images}
            currentIndex={currentImageIndex}
            nextImage={nextImage}
            prevImage={prevImage}
            setCurrentIndex={setCurrentImageIndex}
            onClose={closeFullscreen}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Slider;
