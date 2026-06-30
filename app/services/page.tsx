import SubPageLayout from '@/components/SubPageLayout';

const services = [
  { name: 'ChatGPT Plus', category: 'LLM Chat', tags: ['Paid', 'GPT-4o'], desc: 'Універсальний інструмент від OpenAI з підтримкою зору та голосу.' },
  { name: 'Claude Pro', category: 'LLM Chat', tags: ['Paid', 'Sonnet 3.5'], desc: 'Найкращий помічник для програмування та роботи з великими текстами.' },
  { name: 'Perplexity', category: 'Search', tags: ['Freemium', 'Web'], desc: 'AI-пошуковик, який дає готові відповіді з посиланнями на джерела.' },
  { name: 'Midjourney', category: 'Image Gen', tags: ['Paid', 'Discord'], desc: 'Найпотужніший генератор зображень на ринку.' },
  { name: 'Cursor', category: 'IDE', tags: ['Freemium', 'Copilot'], desc: 'Редактор коду з глибоко інтегрованим ШІ, форк VS Code.' },
  { name: 'Ollama', category: 'Local LLM', tags: ['Free', 'Open Source'], desc: 'Найпростіший спосіб запускати відкриті моделі локально.' },
];

export default function ServicesPage() {
  return (
    <SubPageLayout title="AI-сервіси">
      <p className="mb-10 text-champagne/70 max-w-2xl text-lg">
        Кураторський список найкорисніших та найсучасніших ШІ-додатків.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, i) => (
          <div key={i} className="bg-lacquer-deep/90 border border-white/10 p-6 flex flex-col hover:border-kinpaku-gold/40 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-display text-3xl text-champagne">{service.name}</h3>
              <span className="font-mono text-[10px] uppercase tracking-widest text-kinpaku-gold border border-kinpaku-gold/30 px-2 py-1 rounded-sm">
                {service.category}
              </span>
            </div>
            <p className="font-body text-sm text-champagne/70 flex-grow mb-6">{service.desc}</p>
            <div className="flex gap-2">
              {service.tags.map(tag => (
                <span key={tag} className="text-[9px] font-mono uppercase bg-white/5 px-2 py-1 text-champagne/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SubPageLayout>
  );
}
