// // @ts-nocheck
// 'use client';

// import React, { useState, useEffect, useCallback } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import '../styles/NeonCursor.css';
// const NeonCursor = () => {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0,
//     scale: 1,
//     opacity: 1,
//   });
//   const [isClicking, setIsClicking] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);
//   const trailControls = useAnimation();
//   const glowControls = useAnimation();

//   const handleMouseMove = useCallback((e) => {
//     setPosition((prev) => ({
//       ...prev,
//       x: e.clientX,
//       y: e.clientY,
//     }));
//   }, []);

//   const handleMouseDown = () => setIsClicking(true);
//   const handleMouseUp = () => setIsClicking(false);

//   const handleMouseOver = useCallback(
//     (e) => {
//       const target = e.target;
//       if (target.matches('a, button, input, [data-hover="true"]')) {
//         setIsHovering(true);
//         void trailControls.start({
//           scale: 1.5,
//           borderColor: 'rgb(255, 150, 50)',
//           borderWidth: '30px',
//         });
//         void glowControls.start({
//           scale: 2,
//           opacity: 0.8,
//         });
//       }
//     },
//     [trailControls, glowControls]
//   );

//   const handleMouseOut = useCallback(() => {
//     setIsHovering(false);
//     void trailControls.start({
//       scale: 1,
//       borderColor: 'rgb(236, 101, 23)',
//       borderWidth: '2px',
//     });
//     void glowControls.start({
//       scale: 100,
//       opacity: 0.4,
//     });
//   }, [trailControls, glowControls]);

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mousedown', handleMouseDown);
//     window.addEventListener('mouseup', handleMouseUp);
//     window.addEventListener('mouseover', handleMouseOver);
//     window.addEventListener('mouseout', handleMouseOut);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mousedown', handleMouseDown);
//       window.removeEventListener('mouseup', handleMouseUp);
//       window.removeEventListener('mouseover', handleMouseOver);
//       window.removeEventListener('mouseout', handleMouseOut);
//     };
//   }, [handleMouseMove, handleMouseOver, handleMouseOut]);

//   return (
//     <div className='neon-cursor-container'>
//       {/* Main cursor dot */}
//       <motion.div
//         className='cursor-main'
//         animate={{
//           x: position.x - 10,
//           y: position.y - 10,
//           scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
//         }}
//         transition={{
//           type: 'spring',
//           damping: 20,
//           stiffness: 400,
//           mass: 0.5,
//         }}
//       />

//       {/* Trailing circle */}
//       <motion.div
//         className='cursor-trail'
//         animate={{
//           x: position.x - 20,
//           y: position.y - 20,
//         }}
//         transition={{
//           type: 'spring',
//           damping: 30,
//           stiffness: 200,
//           mass: 0.8,
//         }}
//         initial={false}
//       />

//       {/* Outer glow */}
//       <motion.div
//         className='cursor-glow'
//         animate={{
//           x: position.x - 30,
//           y: position.y - 30,
//         }}
//         transition={{
//           type: 'spring',
//           damping: 40,
//           stiffness: 150,
//           mass: 1,
//         }}
//         initial={false}
//       />
//     </div>
//   );
// };

// export default NeonCursor;

// @ts-nocheck
'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import '../styles/NeonCursor.css';

const NeonCursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth trailing effect
  const trailX = useSpring(x, { damping: 30, stiffness: 200 });
  const trailY = useSpring(y, { damping: 30, stiffness: 200 });

  const glowX = useSpring(x, { damping: 40, stiffness: 150 });
  const glowY = useSpring(y, { damping: 40, stiffness: 150 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, [x, y]);

  return (
    <div className="neon-cursor-container">
      {/* Main cursor */}
      <motion.div
        className="cursor-main"
        style={{
          translateX: x,
          translateY: y,
        }}
      />

      {/* Trail */}
      <motion.div
        className="cursor-trail"
        style={{
          translateX: trailX,
          translateY: trailY,
        }}
      />

      {/* Glow */}
      <motion.div
        className="cursor-glow"
        style={{
          translateX: glowX,
          translateY: glowY,
        }}
      />
    </div>
  );
};

export default NeonCursor;