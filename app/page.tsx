import BentoCard from '@/components/BentoCard'

export default function Home() {
  return (
    <div className="py-10 animate-in fade-in duration-500">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Місце, де корисної інформації <br/><span className="text-[#00ffcc]">більше, ніж шуму</span>
        </h1>
        <p className="text-xl text-gray-400">Закрита AI-спільнота. <span className="text-white font-bold">51 учасник</span>.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
  )
}
