import Link from 'next/link';
import MagneticButton from '@/components/MagneticButton';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full px-8 py-6 z-50 flex justify-between items-center bg-transparent">
      <Link href="/">
        <h1 className="text-2xl tracking-tighter font-medium text-white hover:opacity-80 transition-opacity">
          АІ-база&copy;
        </h1>
      </Link>
      
      <div className="flex gap-4">
        <MagneticButton strength={0.15}>
          <Link href="/rules" className="block px-5 py-2 border border-kinpaku-rule text-champagne/80 font-mono text-[10px] sm:text-xs tracking-widest uppercase rounded-sm hover:bg-patina hover:border-patina hover:text-lacquer-deep transition-colors">
            Правила
          </Link>
        </MagneticButton>
        <MagneticButton strength={0.15}>
          <a href="https://t.me/" target="_blank" className="block px-5 py-2 border border-kinpaku-rule text-champagne/80 font-mono text-[10px] sm:text-xs tracking-widest uppercase rounded-sm hover:bg-patina hover:border-patina hover:text-lacquer-deep transition-colors">
            Приєднатися
          </a>
        </MagneticButton>
      </div>
    </header>
  );
}
