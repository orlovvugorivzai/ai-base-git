import SubPageLayout from '@/components/SubPageLayout';

const posts = [
  { user: 'ChaosGpt', time: '12 mins ago', content: 'Хтось знає, як заставити Claude 3.5 написати мені код без вибачень за те, що він ШІ? 🤡' },
  { user: 'GPU_Hoarder', time: '1 hour ago', content: 'Купив ще одну 4090, тепер їм мівіну до кінця року. Зате локальний LLM генерує токени швидше, ніж я читаю.' },
  { user: 'PromptGod', time: '3 hours ago', content: 'Моя робота: "Prompt Engineer". Що я роблю насправді: "будь ласка, будь хорошим хлопчиком і зроби це, я дам тобі чайові 200 доларів".' },
  { user: 'AGI_Soon', time: '5 hours ago', content: 'Якщо AGI з\'явиться завтра, чи зможу я нарешті перекласти рефакторинг легасі на нього? Чи він теж звільниться?' },
];

export default function ShitpostingPage() {
  return (
    <SubPageLayout title="Щитпостинг">
      <p className="mb-10 text-champagne/70 max-w-2xl text-lg">
        Зона вільного спілкування, мемів та AI-страждань.
      </p>

      <div className="max-w-2xl mx-auto space-y-6">
        {posts.map((post, i) => (
          <div key={i} className="bg-black/40 border border-white/5 p-4 rounded-xl shadow-lg relative">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-kinpaku-gold to-lacquer-deep flex items-center justify-center font-bold text-black text-xs">
                {post.user.substring(0,2).toUpperCase()}
              </div>
              <div>
                <div className="font-bold text-champagne text-sm">{post.user}</div>
                <div className="text-[10px] text-champagne/40">{post.time}</div>
              </div>
            </div>
            <p className="text-champagne/90 text-sm mt-3 ml-11">{post.content}</p>
            <div className="flex gap-4 mt-4 ml-11 text-champagne/40 text-xs font-mono">
              <button className="hover:text-kinpaku-gold transition-colors">↑ Upvote</button>
              <button className="hover:text-kinpaku-gold transition-colors">💬 Reply</button>
            </div>
          </div>
        ))}

        <div className="mt-8 border border-white/10 p-4 rounded-xl bg-black/60 flex gap-4 items-center">
          <input 
            type="text" 
            placeholder="Write something cursed..." 
            className="bg-transparent flex-grow outline-none text-champagne text-sm"
            disabled
          />
          <button className="px-4 py-2 bg-kinpaku-gold text-black text-xs font-bold rounded-md uppercase tracking-wider opacity-50 cursor-not-allowed">
            Post
          </button>
        </div>
      </div>
    </SubPageLayout>
  );
}
