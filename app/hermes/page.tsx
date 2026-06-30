import SubPageLayout from '@/components/SubPageLayout';

export default function HermesPage() {
  return (
    <SubPageLayout title="ГЕРМЕС">
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-32 h-32 mb-8 relative flex items-center justify-center">
          <div className="absolute inset-0 border-2 border-kinpaku-gold rounded-full animate-[spin_10s_linear_infinite] border-t-transparent"></div>
          <div className="absolute inset-2 border border-champagne/30 rounded-full animate-[spin_15s_linear_infinite_reverse] border-b-transparent"></div>
          <div className="text-4xl">🤖</div>
        </div>

        <h2 className="text-3xl font-display text-kinpaku-gold mb-4 uppercase tracking-widest">System Status: Active</h2>
        <p className="text-champagne/70 max-w-xl mx-auto mb-10 leading-relaxed">
          ГЕРМЕС — це наш внутрішній штучний інтелект та вартовий спільноти. 
          Він аналізує ресурси, допомагає з пошуком інформації та модерує чати. 
          Доступ до системи надається лише авторизованим учасникам.
        </p>

        <div className="bg-lacquer-deep border border-kinpaku-gold/20 p-6 max-w-lg w-full text-left font-mono text-sm">
          <div className="text-kinpaku-gold mb-4 border-b border-kinpaku-gold/20 pb-2">Доступні команди:</div>
          <ul className="space-y-3 text-champagne/80">
            <li><span className="text-accent">/ask</span> - Задати питання по базі знань</li>
            <li><span className="text-accent">/summarize</span> - Зробити вижимку з довгого треду</li>
            <li><span className="text-accent">/tools</span> - Отримати список актуальних AI-інструментів</li>
            <li><span className="text-accent">/help</span> - Викликати меню ГЕРМЕСА</li>
          </ul>
        </div>
      </div>
    </SubPageLayout>
  );
}
