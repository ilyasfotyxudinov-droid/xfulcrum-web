import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 px-4 sm:px-6 bg-[#030712] relative">
      
      <!-- Background Mesh -->
      <div class="absolute inset-0 z-0 pointer-events-none opacity-20" style="background-image: radial-gradient(#1e293b 1px, transparent 1px); background-size: 30px 30px;"></div>

      <div class="max-w-7xl mx-auto relative z-10">
        
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-5xl font-bold text-white mb-6 font-tech uppercase">
            Service <span class="text-amber-500">Matrix</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mx-auto">
            Мы не продаем "часы работы". Мы продаем этапы зрелости вашего стартапа. От расчета рынка до подготовки к M&A.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
           
           <!-- TIER 1: MARKET VALIDATION (Skills 1, 2, 3, 10) -->
           <div class="flex flex-col relative bg-slate-900/30 border border-slate-700 hover:border-amber-500/50 rounded-2xl p-8 transition-all hover:-translate-y-1 group">
              <!-- Label -->
              <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-800 border border-slate-600 text-slate-300 text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-widest">
                Step 1: Validation
              </div>

              <h3 class="text-xl font-bold text-white font-tech uppercase mb-2">Market Discovery</h3>
              <p class="text-xs text-slate-500 font-mono mb-6 uppercase">Проверка гипотезы цифрами</p>
              
              <div class="text-3xl font-bold text-white mb-6">
                45,000 ₽ <span class="text-sm font-normal text-slate-500 font-mono">/ sprint</span>
              </div>

              <div class="text-xs font-mono text-amber-500 mb-4 uppercase tracking-wider">Scope of Work:</div>

              <ul class="space-y-4 mb-8 flex-1">
                 <li class="flex items-start gap-3 text-sm text-slate-300">
                    <span class="text-amber-500 font-bold">✓</span>
                    <span><strong class="text-white">TAM/SAM/SOM:</strong> Расчет объема рынка (доступный/фактический).</span>
                 </li>
                 <li class="flex items-start gap-3 text-sm text-slate-300">
                    <span class="text-amber-500 font-bold">✓</span>
                    <span><strong class="text-white">Trend Watch:</strong> Анализ трендов E-com 2025-2026.</span>
                 </li>
                 <li class="flex items-start gap-3 text-sm text-slate-300">
                    <span class="text-amber-500 font-bold">✓</span>
                    <span><strong class="text-white">Competitor Scan:</strong> Разведка бизнес-моделей конкурентов.</span>
                 </li>
                 <li class="flex items-start gap-3 text-sm text-slate-300">
                    <span class="text-amber-500 font-bold">✓</span>
                    <span><strong class="text-white">CustDev Data:</strong> Сегментация ЦА (боли/страхи).</span>
                 </li>
              </ul>

              <button class="w-full py-3 bg-transparent border border-slate-600 text-white hover:bg-slate-800 hover:border-white font-bold text-xs uppercase tracking-wider rounded transition-all">
                Validate Idea
              </button>
           </div>

           <!-- TIER 2: INVESTMENT PACKAGING (Skills 5, 8, 9, 11) -->
           <div class="flex flex-col relative bg-[#0a0f1e] border-2 border-amber-600 rounded-2xl p-8 transform md:scale-105 shadow-[0_0_30px_rgba(245,158,11,0.15)] z-10">
              <!-- Label -->
              <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-black text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-widest flex items-center gap-1 shadow-lg">
                <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                Investor Ready
              </div>

              <h3 class="text-2xl font-bold text-white font-tech uppercase mb-2">Venture Pack</h3>
              <p class="text-xs text-amber-500/80 font-mono mb-6 uppercase">Упаковка актива для раунда</p>
              
              <div class="text-4xl font-bold text-white mb-6">
                190,000 ₽ <span class="text-sm font-normal text-slate-500 font-mono">/ project</span>
              </div>

              <div class="h-px w-full bg-slate-800 mb-6"></div>

              <div class="text-xs font-mono text-amber-500 mb-4 uppercase tracking-wider">Deliverables:</div>

              <ul class="space-y-4 mb-8 flex-1">
                 <li class="flex items-start gap-3 text-sm text-white">
                    <span class="text-amber-500 font-bold">✓</span>
                    <span><strong class="text-white">Financial Model:</strong> P&L, Unit-экономика, прогноз Cash Flow.</span>
                 </li>
                 <li class="flex items-start gap-3 text-sm text-white">
                    <span class="text-amber-500 font-bold">✓</span>
                    <span><strong class="text-white">Product Matrix:</strong> Разработка УТП и позиционирования.</span>
                 </li>
                 <li class="flex items-start gap-3 text-sm text-white">
                    <span class="text-amber-500 font-bold">✓</span>
                    <span><strong class="text-white">MVP Landing:</strong> Tilda Zero-Block (SaaS-качество).</span>
                 </li>
                 <li class="flex items-start gap-3 text-sm text-white">
                    <span class="text-amber-500 font-bold">✓</span>
                    <span><strong class="text-white">Pitch Deck:</strong> Презентация для защиты перед фондом.</span>
                 </li>
              </ul>

              <button class="w-full py-4 bg-amber-600 hover:bg-amber-500 text-black font-bold text-sm uppercase tracking-wider rounded transition-all shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.23)] hover:-translate-y-1 relative overflow-hidden">
                <span class="relative z-10">Start Packaging</span>
                <div class="absolute inset-0 bg-white/30 translate-y-full hover:translate-y-0 transition-transform duration-300"></div>
              </button>
           </div>

           <!-- TIER 3: GTM & SCALING (Skills 4, 6, 7) -->
           <div class="flex flex-col relative bg-slate-900/30 border border-slate-700 hover:border-indigo-500/50 rounded-2xl p-8 transition-all hover:-translate-y-1 group">
              <!-- Label -->
              <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-800 border border-slate-600 text-slate-300 text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-widest">
                Step 3: Growth
              </div>

              <h3 class="text-xl font-bold text-white font-tech uppercase mb-2">GTM Execution</h3>
              <p class="text-xs text-slate-500 font-mono mb-6 uppercase">Стратегия выхода и захвата</p>
              
              <div class="text-3xl font-bold text-white mb-6">
                Custom <span class="text-sm font-normal text-slate-500 font-mono">/ month</span>
              </div>

              <div class="text-xs font-mono text-indigo-500 mb-4 uppercase tracking-wider">Capabilities:</div>

              <ul class="space-y-4 mb-8 flex-1">
                 <li class="flex items-start gap-3 text-sm text-slate-300">
                    <span class="text-indigo-500">✓</span>
                    <span><strong class="text-white">GTM Strategy:</strong> Риски, география, динамика выхода.</span>
                 </li>
                 <li class="flex items-start gap-3 text-sm text-slate-300">
                    <span class="text-indigo-500">✓</span>
                    <span><strong class="text-white">Ad Tech 2026:</strong> Инструменты Digital-рекламы нового поколения.</span>
                 </li>
                 <li class="flex items-start gap-3 text-sm text-slate-300">
                    <span class="text-indigo-500">✓</span>
                    <span><strong class="text-white">Deep Analytics:</strong> Сквозная аналитика и аудит качества данных.</span>
                 </li>
              </ul>

              <button class="w-full py-3 bg-transparent border border-slate-600 text-white hover:bg-indigo-900/50 hover:border-indigo-500 font-bold text-xs uppercase tracking-wider rounded transition-all">
                Discuss Strategy
              </button>
           </div>

        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent {}