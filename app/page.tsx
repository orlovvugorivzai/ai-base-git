import BentoCard from '@/components/BentoCard'
import WaveBackground from '@/components/WaveBackground'
import MagneticButton from '@/components/MagneticButton'

export default function Home() {
  return (
    <>
      <WaveBackground />
      
      <div className="h-screen flex flex-col justify-between items-center w-full relative pt-24 pb-6 overflow-hidden">
        
        {/* Top/Center: Title Area */}
        <div className="flex flex-col items-center text-center animate-in fade-in duration-1000 px-4 mt-2 lg:mt-8">
          <p className="text-[9px] sm:text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-4 relative z-10">Neural Architecture // AI Community</p>
          
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-medium tracking-tighter text-white leading-none mb-4 relative z-10 mix-blend-difference">
            АІ БАЗА
          </h1>
          
          <p className="font-mono text-gray-400 text-xs sm:text-sm max-w-lg mb-8 font-light relative z-10 px-4">
            Automated entropy reduction for closed communities. <br className="hidden sm:block"/>
            Transform unstructured chaos into linear logic.
          </p>
          
          <MagneticButton>
            <a href="https://t.me/" target="_blank" className="block px-6 py-3 border border-white/30 text-white text-xs tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-colors relative z-10 backdrop-blur-md bg-black/20">
              Deploy Instance &rarr;
            </a>
          </MagneticButton>
        </div>

        {/* Bottom: Bento Grid (Fit on same screen) */}
        <div className="w-full px-4 animate-in fade-in duration-1000 delay-500 relative z-10 mb-4 max-h-[50vh] overflow-y-auto sm:overflow-visible no-scrollbar">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 max-w-7xl mx-auto">
            <BentoCard title="Правила" href="/rules" colSpan={2} isPrimary={true} />
            <BentoCard title="Networking" href="/networking" />
            <BentoCard title="AI Гайди" href="/guides" />
            <BentoCard title="AI-сервіси" href="/services" />
            <BentoCard title="Геми GitHub" href="/github" />
            <BentoCard title="Щитпостинг" href="/shitposting" />
            <BentoCard title="ГЕРМЕС" href="/hermes" />
            <BentoCard title="Піратська бухта" href="/pirate-bay" colSpan={2} />
          </div>
        </div>
        
      </div>
    </>
  )
}
