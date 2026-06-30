import Link from 'next/link';

export default function Page() {
  return (
    <div className="py-10 max-w-3xl mx-auto animate-in fade-in duration-300">
      <Link href="/" className="text-[#00ffcc] hover:underline mb-8 inline-block">&larr; Назад на головну</Link>
      <h1 className="text-4xl font-bold mb-4 text-white">Щитпостинг</h1>
      <p className="text-gray-400">Наш бот-пилосос, котрий збирає новини з якісних телеграм-пабліків.</p>
    </div>
  )
}
