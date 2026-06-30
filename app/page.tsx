import BentoCard from '@/components/BentoCard'
import WaveBackground from '@/components/WaveBackground'

export default function Home() {
  return (
    <>
      <WaveBackground />
      
      {/* Hero Section */}
      <div className="h-screen flex flex-col justify-center items-center text-center animate-in fade-in duration-1000 px-4 w-full relative">
        <p className="text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-6 relative z-10">Neural Architecture // AI Community</p>
        
        <h1 className="text-7xl md:text-[9rem] font-medium tracking-tighter text-white leading-none mb-6 relative z-10 mix-blend-difference">
          АІ БАЗА
        </h1>
        
        <p className="text-gray-400 text-sm md:text-base max-w-lg mb-10 font-light relative z-10">
          Automated entropy reduction for closed communities. <br/>
          Transform unstructured chaos into linear logic.
        </p>
        
        <a href="https://t.me/" target="_blank" className="px-6 py-2 border border-white/30 text-white text-xs tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-all relative z-10 backdrop-blur-md bg-black/20">
          Deploy Instance &rarr;
        </a>
      </div>

      {/* Bento Grid Section */}
      <div className="py-32 px-4 animate-in fade-in duration-1000 delay-500 bg-gradient-to-t from-[#0a0a0a] to-transparent relative z-10">
        <h2 className="text-3xl font-light mb-16 text-center text-white/80 tracking-tight">Досліджуйте Систему</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <BentoCard title="Правила" href="/rules" colSpan={2} isPrimary={true} />
          <BentoCard title="Networking" href="/networking" />
          <BentoCard title="AI Гайди" href="/guides" />
          <BentoCard title="AI-сервіси" href="/services" />
          <BentoCard title="Геми GitHub" href="/github" />
          <BentoCard title="Щитпостинг" href="/shitposting" />
          <BentoCard title="ГЕРМЕС" href="/hermes" />
          <BentoCard title="Піратська бухта" href="/pirate-bay" />
        </div>
      </div>
    </>
  )
}
