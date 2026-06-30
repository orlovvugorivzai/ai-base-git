import Link from 'next/link';

export default function RulesPage() {
  return (
    <div className="py-10 max-w-3xl mx-auto animate-in fade-in duration-300">
      <Link href="/" className="text-[#00ffcc] hover:underline mb-8 inline-block">&larr; Назад на головну</Link>
      
      <h1 className="text-4xl font-bold mb-8 text-white">📌 Правила спільноти</h1>
      
      <div className="space-y-4 text-gray-300 bg-white/5 p-6 rounded-2xl border border-white/10">
        <p className="border-b border-white/10 pb-4"><strong>1.</strong> Без політики та релігії.</p>
        <p className="border-b border-white/10 pb-4"><strong>2.</strong> Кейси, інструменти, новини, промпти, автоматизація, агенти та AI-проєкти &mdash; вітаються.</p>
        <p className="border-b border-white/10 pb-4"><strong>3.</strong> Поважайте учасників спільноти. Образи, цькування та згадки родичів в образливому контексті &mdash; бан без права повернення.</p>
        <p className="border-b border-white/10 pb-4"><strong>4.</strong> Мати дозволені. Використовуйте їх за призначенням, а не замість аргументів.</p>
        <p className="border-b border-white/10 pb-4"><strong>5.</strong> Свої проєкти публікуйте у відповідній гілці з нетворкінгом.</p>
        <p className="border-b border-white/10 pb-4"><strong>6.</strong> Якщо публікуєте реферальне посилання &mdash; обов’язково позначайте, що це рефка, та надсилайте його гіперпосиланням. Порушення: видалення повідомлення + попередження. Після трьох попереджень &mdash; бан без права повернення.</p>
        <p className="border-b border-white/10 pb-4"><strong>7.</strong> Ви самі відповідаєте за те, що публікуєте, і самі відповідаєте за те, куди натискаєте. За шахрайство, фішинг, шкідливі або навмисно підозрілі посилання &mdash; бан без права повернення.</p>
        <p><strong>8.</strong> Якщо виникли питання, проблеми або конфліктні ситуації &mdash; тегайте мене або адміністрацію.</p>
      </div>
    </div>
  )
}
