import SubPageLayout from '@/components/SubPageLayout';

const torrents = [
  { name: 'Adobe CC 2024 AI Extensions Unlocked', size: '1.2 GB', seeders: 142 },
  { name: 'Midjourney v6 Prompts Masterclass (Leaked)', size: '4.5 GB', seeders: 356 },
  { name: 'Llama 3 70B Instruct - GGUF Quantized', size: '39 GB', seeders: 890 },
  { name: 'Top 100 AI SaaS Boilerplates', size: '250 MB', seeders: 215 },
  { name: 'Stable Diffusion XL Checkpoints Collection', size: '45 GB', seeders: 512 },
];

export default function PirateBayPage() {
  return (
    <SubPageLayout title="Піратська бухта">
      <div className="border border-red-500/20 bg-red-500/5 p-4 rounded-sm mb-10 font-mono text-xs text-red-400/80 uppercase tracking-widest text-center">
        Warning: For educational purposes only. Use a VPN.
      </div>

      <div className="bg-[#0a0a0a] border border-[#222] font-mono text-sm overflow-hidden">
        <div className="grid grid-cols-12 bg-[#111] p-3 border-b border-[#222] text-[#888]">
          <div className="col-span-8">Name</div>
          <div className="col-span-2 text-right">Size</div>
          <div className="col-span-2 text-right">SE</div>
        </div>
        
        <div className="divide-y divide-[#222]">
          {torrents.map((t, i) => (
            <div key={i} className="grid grid-cols-12 p-3 hover:bg-[#1a1a1a] transition-colors items-center group">
              <div className="col-span-8 flex items-center gap-3">
                <span className="text-kinpaku-gold opacity-50 group-hover:opacity-100 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                </span>
                <span className="text-champagne/80 group-hover:text-champagne cursor-pointer truncate">
                  {t.name}
                </span>
              </div>
              <div className="col-span-2 text-right text-[#888]">{t.size}</div>
              <div className="col-span-2 text-right text-[#00ffcc]">{t.seeders}</div>
            </div>
          ))}
        </div>
      </div>
    </SubPageLayout>
  );
}
