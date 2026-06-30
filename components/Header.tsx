import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full p-4 backdrop-blur-md bg-black/50 border-b border-white/10 z-50 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-xl font-bold text-white hover:text-[#00ffcc] transition-colors">АІ-база</h1>
      </Link>
      <a href="https://t.me/" target="_blank" className="px-4 py-2 bg-[#00ffcc] text-black font-semibold rounded-lg hover:bg-white transition-colors">
        Приєднатися
      </a>
    </header>
  );
}
