import React, { useId } from 'react';

interface CarbonPatternProps {
  className?: string;
  opacity?: number;
}

export function CarbonPattern({ className = "", opacity = 0.4 }: CarbonPatternProps) {
  const id = useId().replace(/:/g, '');
  const patternId = `carbon-weave-${id}`;

  return (
    <svg 
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} 
      style={{ opacity }} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern 
          id={patternId}
          width="12" 
          height="12" 
          patternUnits="userSpaceOnUse"
        >
          <path d="M0 12L12 0ZM12 12L0 0Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" fill="none" />
          <rect x="0" y="0" width="6" height="6" fill="currentColor" fillOpacity="0.02" />
          <rect x="6" y="6" width="6" height="6" fill="currentColor" fillOpacity="0.02" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
