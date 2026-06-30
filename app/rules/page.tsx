import SubPageLayout from '@/components/SubPageLayout';

export default function RulesPage() {
  return (
    <SubPageLayout title="Правила спільноти">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { id: '01', title: 'Без політики та релігії', desc: 'Спільнота фокусується виключно на технологіях, ШІ та розвитку.' },
          { id: '02', title: 'Контент вітається', desc: 'Кейси, інструменти, новини, промпти, автоматизація, агенти та AI-проєкти — завжди актуальні.' },
          { id: '03', title: 'Повага до учасників', desc: 'Образи, цькування та згадки родичів в образливому контексті — бан без права повернення.' },
          { id: '04', title: 'Про нецензурну лексику', desc: 'Мати дозволені. Використовуйте їх за призначенням для емоційного забарвлення, а не замість аргументів.' },
          { id: '05', title: 'Власні проєкти', desc: 'Свої проєкти публікуйте у відповідній гілці з нетворкінгом.' },
          { id: '06', title: 'Реферальні посилання', desc: 'Обов’язково позначайте, що це рефка, та надсилайте гіперпосиланням. За порушення — видалення і попередження. 3 попередження = бан.' },
          { id: '07', title: 'Особиста відповідальність', desc: 'Ви самі відповідаєте за те, куди натискаєте. За шахрайство, фішинг, шкідливі посилання — довічний бан.' },
          { id: '08', title: 'Зв\'язок з адміністрацією', desc: 'Якщо виникли питання, проблеми або конфліктні ситуації — тегайте адмінів.' },
        ].map(rule => (
          <div key={rule.id} className="bg-lacquer-deep/80 border border-kinpaku-gold/10 p-6 rounded-sm hover:border-kinpaku-gold/30 transition-colors backdrop-blur-sm">
            <div className="font-mono text-kinpaku-gold text-sm mb-2">{rule.id}</div>
            <h3 className="font-display text-2xl text-champagne mb-2">{rule.title}</h3>
            <p className="font-body text-champagne/70 text-sm leading-relaxed">{rule.desc}</p>
          </div>
        ))}
      </div>
    </SubPageLayout>
  );
}
