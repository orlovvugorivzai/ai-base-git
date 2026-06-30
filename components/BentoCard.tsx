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
    case "Networking": return { Icon: Users, extraClass: "bg-gradient-to-br from-lacquer-black to-lacquer-deep" };
    case "AI Гайди": return { Icon: Lightbulb, extraClass: "" };
    case "AI-сервіси": return { Icon: Robot, extraClass: "" };
    case "Геми GitHub": return { Icon: Code, extraClass: "bg-lacquer-deep" };
    case "Щитпостинг": return { Icon: Alien, extraClass: "" };
    case "ГЕРМЕС": return { Icon: Bird, extraClass: "shadow-[inset_0_0_30px_rgba(212,175,55,0.04)]" };
    case "Піратська бухта": return { Icon: Skull, extraClass: "shadow-[inset_0_0_30px_rgba(64,224,208,0.04)]" };
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
        className={`block p-6 rounded-sm bg-lacquer-raised border border-kinpaku-gold relative overflow-hidden group hover:bg-kinpaku-pale/10 transition-colors ${spanClass} ${extraClass}`}
      >
        <div className="absolute top-0 left-0 w-[2px] h-full bg-kinpaku-gold"></div>
        <div className="flex justify-between items-start mb-2">
          <h2 className="font-display text-2xl font-semibold text-kinpaku-gold uppercase tracking-wider">{title}</h2>
          {Icon && <Icon size={24} weight="duotone" className="text-kinpaku-gold opacity-80" />}
        </div>
        <p className="text-kinpaku-gold/60 font-mono text-xs mt-4 group-hover:animate-pulse">&gt; init_sequence()</p>
      </Link>
    );
  }

  return (
    <Link 
      href={href} 
      className={`block p-6 rounded-sm bg-lacquer-raised border border-kinpaku-rule relative overflow-hidden hover:border-kinpaku-deep group transition-all ${spanClass} ${extraClass}`}
    >
      <div className="flex justify-between items-start mb-2">
        <h2 className="font-display text-xl font-medium text-champagne uppercase tracking-wider">{title}</h2>
        {Icon && <Icon size={20} weight="duotone" className="text-champagne/40 group-hover:text-patina transition-colors" />}
      </div>
      <p className="text-champagne/50 font-mono text-[10px] sm:text-xs mt-4 opacity-0 group-hover:opacity-100 transition-opacity">&gt; system.access()</p>
    </Link>
  );
}
