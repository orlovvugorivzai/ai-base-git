import Link from 'next/link';
import { 
  ShieldCheck, 
  Users, 
  Lightbulb, 
  Robot, 
  Code, 
  Alien, 
  Bird, 
  Skull 
} from "@phosphor-icons/react/dist/ssr";

interface Props { 
  title: string; 
  href: string; 
  colSpan?: number; 
  isPrimary?: boolean;
}

const getCardStyle = (title: string) => {
  switch (title) {
    case "Правила": return { Icon: ShieldCheck, extraClass: "" };
    case "Networking": return { Icon: Users, extraClass: "bg-gradient-to-br from-black to-zinc-900/50" };
    case "AI Гайди": return { Icon: Lightbulb, extraClass: "" };
    case "AI-сервіси": return { Icon: Robot, extraClass: "" };
    case "Геми GitHub": return { Icon: Code, extraClass: "bg-zinc-950" };
    case "Щитпостинг": return { Icon: Alien, extraClass: "" };
    case "ГЕРМЕС": return { Icon: Bird, extraClass: "shadow-[inset_0_0_30px_rgba(0,150,255,0.04)]" };
    case "Піратська бухта": return { Icon: Skull, extraClass: "shadow-[inset_0_0_30px_rgba(255,0,0,0.04)]" };
    default: return { Icon: null, extraClass: "" };
  }
}

export default function BentoCard({ title, href, colSpan = 1, isPrimary = false }: Props) {
  const spanClass = colSpan === 2 ? 'md:col-span-2' : '';
  const { Icon, extraClass } = getCardStyle(title);
  
  if (isPrimary) {
    return (
      <Link 
        href={href} 
        className={`block p-6 rounded-none bg-black border border-[#00ffcc] relative overflow-hidden group hover:bg-[#00ffcc]/10 transition-colors ${spanClass} ${extraClass}`}
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-[#00ffcc]"></div>
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-[#00ffcc] uppercase tracking-widest">{title}_</h2>
          {Icon && <Icon size={24} weight="duotone" className="text-[#00ffcc] opacity-80" />}
        </div>
        <p className="text-[#00ffcc]/60 font-mono text-xs mt-4 group-hover:animate-pulse">&gt; init_sequence()</p>
      </Link>
    );
  }

  return (
    <Link 
      href={href} 
      className={`block p-6 rounded-none bg-black border border-white/10 relative overflow-hidden hover:border-[#00ffcc]/50 hover:shadow-[0_0_15px_rgba(0,255,204,0.1)] group transition-all ${spanClass} ${extraClass}`}
    >
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-lg font-bold text-white uppercase tracking-wider">{title}</h2>
        {Icon && <Icon size={20} weight="duotone" className="text-white/40 group-hover:text-[#00ffcc]/80 transition-colors" />}
      </div>
      <p className="text-gray-600 font-mono text-[10px] sm:text-xs mt-4 opacity-0 group-hover:opacity-100 transition-opacity">&gt; system.access()</p>
    </Link>
  );
}
