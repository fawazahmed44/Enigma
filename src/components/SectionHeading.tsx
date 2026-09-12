import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  alignment = 'center',
  className = '',
  light = false,
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[alignment];

  return (
    <div className={`flex flex-col ${alignClass} mb-12 md:mb-16 ${className}`}>
      {eyebrow && (
        <div className="flex items-center space-x-3 mb-3">
          <span className="h-[1px] w-6 bg-[#c8aa76]/40" />
          <span className="text-xs md:text-sm tracking-[0.24em] uppercase text-[#c8aa76] font-medium">
            {eyebrow}
          </span>
          <span className="h-[1px] w-6 bg-[#c8aa76]/40" />
        </div>
      )}
      <h2
        className={`font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.04em] leading-[1.12] ${
          light ? 'text-[#09090b]' : 'text-[#ede8df]'
        } max-w-4xl`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed ${
            light ? 'text-[#4a4944]' : 'text-[#9b9890]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
