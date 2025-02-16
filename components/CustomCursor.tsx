"use client";

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(target.tagName === 'A' || target.tagName === 'BUTTON');
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
        }}
      />
    </>
  );
}