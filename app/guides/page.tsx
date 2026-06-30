import SubPageLayout from '@/components/SubPageLayout';

const guides = [
  { title: 'Локальний запуск LLM (Ollama)', level: 'Beginner', readTime: '5 min' },
  { title: 'Промпт-інжиніринг для розробників', level: 'Intermediate', readTime: '12 min' },
  { title: 'Створення AI-агентів на LangChain', level: 'Advanced', readTime: '25 min' },
  { title: 'Генерація UI/UX за допомогою Claude 3.5 Sonnet', level: 'Intermediate', readTime: '8 min' },
  { title: 'Midjourney v6: Від основ до майстерності', level: 'Beginner', readTime: '15 min' },
];

export default function GuidesPage() {
  return (
    <SubPageLayout title="AI Гайди">
      <p className="mb-10 text-champagne/70 max-w-2xl text-lg">
        Збірка найкращих інструкцій та туторіалів від ком'юніті.
      </p>

      <div className="space-y-4">
        {guides.map((guide, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between bg-lacquer-deep/60 border-l-2 border-l-kinpaku-gold border border-white/5 p-4 sm:p-6 hover:bg-lacquer-raised/80 transition-colors backdrop-blur-sm cursor-pointer group">
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-champagne mb-2 group-hover:text-kinpaku-pale transition-colors">{guide.title}</h3>
              <div className="flex gap-4 font-mono text-[10px] text-champagne/50 uppercase tracking-widest">
                <span className={guide.level === 'Beginner' ? 'text-green-400' : guide.level === 'Intermediate' ? 'text-yellow-400' : 'text-red-400'}>
                  Lvl: {guide.level}
                </span>
                <span>Time: {guide.readTime}</span>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 font-mono text-sm text-kinpaku-gold opacity-50 group-hover:opacity-100 transition-opacity flex items-center gap-2">
              <span>Read</span> <span className="text-lg">&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </SubPageLayout>
  );
}
