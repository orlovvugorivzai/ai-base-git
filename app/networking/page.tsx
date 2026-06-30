import SubPageLayout from '@/components/SubPageLayout';

const profiles = [
  { name: 'Alex K.', role: 'AI Engineer', skills: ['Python', 'PyTorch', 'LangChain'], contact: '@alex_ai' },
  { name: 'Maria S.', role: 'Prompt Designer', skills: ['Midjourney', 'Stable Diffusion', 'Copywriting'], contact: '@maria_art' },
  { name: 'Denys V.', role: 'Data Scientist', skills: ['R', 'TensorFlow', 'SQL'], contact: '@denys_data' },
  { name: 'Ivan R.', role: 'Backend Developer', skills: ['Go', 'Node.js', 'Docker'], contact: '@ivan_dev' },
  { name: 'Anna P.', role: 'Product Manager', skills: ['Strategy', 'Agile', 'AI Ethics'], contact: '@anna_pm' },
  { name: 'Oleg M.', role: 'LLM Researcher', skills: ['Fine-tuning', 'Transformers', 'NLP'], contact: '@oleg_llm' },
];

export default function NetworkingPage() {
  return (
    <SubPageLayout title="Networking">
      <p className="mb-10 text-champagne/70 max-w-2xl text-lg">
        Знайдіть однодумців, спеціалістів для свого проєкту або просто цікавих людей для обговорення ШІ.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((profile, i) => (
          <div key={i} className="bg-lacquer-deep/90 border border-kinpaku-gold/20 p-6 rounded-sm hover:border-kinpaku-gold/60 transition-all group backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-kinpaku-gold/5 rounded-bl-full -z-10 group-hover:bg-kinpaku-gold/10 transition-colors" />
            <h3 className="font-display text-2xl text-champagne mb-1">{profile.name}</h3>
            <div className="font-mono text-kinpaku-gold text-xs uppercase tracking-wider mb-4">{profile.role}</div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {profile.skills.map((skill, j) => (
                <span key={j} className="text-[10px] font-mono px-2 py-1 bg-white/5 border border-white/10 text-champagne/80 rounded-sm">
                  {skill}
                </span>
              ))}
            </div>

            <a href={`https://t.me/${profile.contact.replace('@', '')}`} target="_blank" className="inline-block w-full text-center py-2 text-xs font-mono tracking-widest uppercase border border-kinpaku-gold/30 text-kinpaku-gold hover:bg-kinpaku-gold hover:text-lacquer-black transition-colors">
              Connect {profile.contact}
            </a>
          </div>
        ))}
      </div>
    </SubPageLayout>
  );
}
