import React from 'react';
import Link from 'next/link';
import WaveBackground from './WaveBackground';

interface SubPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function SubPageLayout({ title, children }: SubPageLayoutProps) {
  return (
    <>
      <WaveBackground />
      <div className="min-h-screen w-full relative pt-12 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto animate-in fade-in duration-1000">
          
          <div className="mb-8 flex flex-col-reverse sm:flex-row sm:items-end justify-between border-b border-kinpaku-gold/20 pb-4 sm:pb-6 gap-4 sm:gap-0">
            <h1 className="font-display text-4xl sm:text-6xl text-champagne tracking-tight leading-none">
              {title}
            </h1>
            <Link 
              href="/" 
              className="group flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-kinpaku-gold hover:text-kinpaku-pale uppercase transition-colors self-start sm:self-auto"
            >
              <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">&larr;</span>
              <span>Back to Base</span>
            </Link>
          </div>

          <div className="text-champagne/90 font-body">
            {children}
          </div>
          
        </div>
      </div>
    </>
  );
}
