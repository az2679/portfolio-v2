import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 10 : -10,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 10 : -10,
      opacity: 0
    }
  }
}

export default function Carousel({items}) {
  const [[page, direction], setPage] = useState([0,0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  const imageIndex = (page + items.length) % items.length;
  const showButtons = items.length > 1;

  return(
    <>
      <AnimatePresence intitial={false} custom={direction}>
        {items.map((item, index) => (
          index === imageIndex && (
            <motion.div className="carouselContainer" key={index} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" 
              transition={{
                x: {type: 'spring', stiffness: 300, damping: 30},
                opacity: {duration: 0.2}
              }}
            >
              {item.type === 'video' ? (
                <video className="carouselItem" src={item.src} controls />
              ) : (
                <img className="carouselItem" src={item.src} alt={item.alt || 'carousel item'} />
              )}
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {showButtons && (
        <>
      <div className="carouselButton carouselButtonLeft" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
      <div className="carouselButton carouselButtonRight" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      </>
      )}
    </>
  )
}