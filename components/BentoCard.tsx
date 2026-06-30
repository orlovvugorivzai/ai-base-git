import Link from 'next/link';

interface Props { 
  title: string; 
  href: string; 
  colSpan?: number; 
  isPrimary?: boolean;
}

export default function BentoCard({ title, href, colSpan = 1, isPrimary = false }: Props) {
  const spanClass = colSpan === 2 ? 'md:col-span-2' : '';
  
  if (isPrimary) {
    return (
      <Link 
        href={href} 
        className={`block p-6 rounded-none bg-black border border-[#00ffcc] relative overflow-hidden group hover:bg-[#00ffcc]/10 transition-colors ${spanClass}`}
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-[#00ffcc]"></div>
        <h2 className="text-xl font-bold text-[#00ffcc] uppercase tracking-widest mb-2">{title}_</h2>
        <p className="text-[#00ffcc]/60 font-mono text-xs mt-4 group-hover:animate-pulse">&gt; init_sequence()</p>
      </Link>
    );
  }

  return (
    <Link 
      href={href} 
      className={`block p-6 rounded-none bg-black border border-white/20 relative overflow-hidden hover:border-[#00ffcc] hover:shadow-[0_0_15px_rgba(0,255,204,0.15)] group transition-all ${spanClass}`}
    >
      <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-2">{title}</h2>
      <p className="text-gray-500 font-mono text-xs mt-4 opacity-0 group-hover:opacity-100 transition-opacity">&gt; system.access()</p>
    </Link>
  );
}
