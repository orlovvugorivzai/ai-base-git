import Link from 'next/link';

interface Props { 
  title: string; 
  href: string; 
  colSpan?: number; 
}

export default function BentoCard({ title, href, colSpan = 1 }: Props) {
  const spanClass = colSpan === 2 ? 'md:col-span-2' : '';
  
  return (
    <Link 
      href={href} 
      className={`block p-6 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-1 hover:border-[#00ffcc]/50 transition-all backdrop-blur-sm ${spanClass}`}
    >
      <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
      <p className="text-gray-400 text-sm">Дізнатися більше &rarr;</p>
    </Link>
  );
}
