import SubPageLayout from '@/components/SubPageLayout';

const repos = [
  { name: 'langchain-ai/langchain', stars: '80k+', desc: 'Building applications with LLMs through composability.', tech: 'Python' },
  { name: 'Significant-Gravitas/AutoGPT', stars: '160k+', desc: 'An experimental open-source attempt to make GPT-4 fully autonomous.', tech: 'Python' },
  { name: 'ollama/ollama', stars: '65k+', desc: 'Get up and running with Llama 3, Mistral, Gemma, and other large language models.', tech: 'Go' },
  { name: 'microsoft/autogen', stars: '25k+', desc: 'A programming framework for agentic AI.', tech: 'Python' },
  { name: 'vercel/ai', stars: '12k+', desc: 'The AI SDK for building conversational, streaming, and chat UIs in JS/TS.', tech: 'TypeScript' },
];

export default function GithubPage() {
  return (
    <SubPageLayout title="Геми GitHub">
      <p className="mb-10 text-champagne/70 max-w-2xl text-lg">
        Найважливіші open-source репозиторії для розробки AI-продуктів.
      </p>

      <div className="space-y-4">
        {repos.map((repo, i) => (
          <div key={i} className="bg-[#0d1117] border border-[#30363d] rounded-md p-5 flex flex-col sm:flex-row justify-between hover:border-[#8b949e] transition-colors relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-kinpaku-gold/0 group-hover:bg-kinpaku-gold transition-colors" />
            <div className="mb-4 sm:mb-0 pl-2">
              <h3 className="font-mono text-[#58a6ff] text-lg mb-2 flex items-center gap-2">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="opacity-70"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1v-2h-8a2.5 2.5 0 0 0-1 4.5v-4.5ZM3.5 4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-8Z"></path></svg>
                {repo.name}
              </h3>
              <p className="font-body text-[#8b949e] text-sm max-w-2xl">{repo.desc}</p>
            </div>
            <div className="flex sm:flex-col items-center sm:items-end justify-between pl-2 sm:pl-0">
              <div className="flex items-center gap-1 font-mono text-xs text-[#8b949e] mb-2">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path></svg>
                {repo.stars}
              </div>
              <div className="font-mono text-xs px-2 py-1 bg-[#21262d] text-[#c9d1d9] rounded-xl border border-[#30363d]">
                {repo.tech}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SubPageLayout>
  );
}
