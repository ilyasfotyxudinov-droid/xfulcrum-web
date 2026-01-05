import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  template: `
    <section class="py-24 px-4 sm:px-6 bg-[#030712] relative overflow-hidden border-t border-slate-900">
      
      <!-- Background Graphic: Orbital Lines -->
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <svg class="w-full h-full" preserveAspectRatio="none">
          <path d="M0,100 C300,100 500,500 1000,500" stroke="currentColor" stroke-width="1" fill="none" class="text-slate-700"/>
          <path d="M0,300 C400,300 600,600 1200,100" stroke="currentColor" stroke-width="1" fill="none" class="text-slate-700 dashed-line"/>
        </svg>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/30 border border-cyan-900 rounded-full mb-6">
             <span class="text-[10px] font-mono uppercase text-cyan-400">Operational Roadmap</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold text-white mb-6 font-tech uppercase">
            От <span class="text-slate-500 line-through decoration-red-500">MVP</span> до <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Exit Strategy</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mx-auto">
            Мы не просто "настраиваем рекламу". Мы готовим актив к продаже инвестору или стратегическому партнеру.
          </p>
        </div>

        <!-- The Timeline Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          <!-- Connector Line (Desktop) -->
          <div class="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-slate-800 via-cyan-900 to-slate-800 -z-10"></div>

          <!-- Stage 1: Market Filter -->
          <div class="group relative pt-12">
            <!-- Node Point -->
            <div class="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#030712] border-2 border-red-500 rounded-full group-hover:border-red-400 group-hover:scale-125 transition-all z-10 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.5)]">
               <div class="w-2 h-2 bg-red-500 rounded-full group-hover:bg-white transition-colors"></div>
            </div>

            <div class="bg-red-950/10 border border-red-900/50 hover:border-red-500 p-6 rounded-xl backdrop-blur-sm transition-all hover:-translate-y-2 h-full flex flex-col relative overflow-hidden opacity-60 hover:opacity-100">
               <!-- Scanline -->
               <div class="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
               
               <div class="mb-4 flex items-center justify-between">
                  <span class="text-xs font-mono text-red-400 uppercase tracking-widest bg-red-950/30 px-2 py-1 rounded border border-red-900/50">Stage 0: Filter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
               </div>
               
               <h3 class="text-xl font-bold text-white mb-2 font-tech uppercase">Market Reality</h3>
               <p class="text-slate-400 text-sm mb-6 border-b border-red-900/30 pb-4">
                 <span class="text-red-400 font-bold">CRITICAL:</span> Прежде чем писать код, мы проверяем, есть ли деньги в нише.
               </p>
               
               <ul class="space-y-3 mt-auto">
                 <li class="flex items-start gap-3 text-sm text-slate-300">
                   <span class="text-red-500 font-mono">STOP</span>
                   <span>TAM < 300M ₽</span>
                 </li>
                 <li class="flex items-start gap-3 text-sm text-slate-300">
                   <span class="text-emerald-500 font-mono">GO</span>
                   <span>Unit-экономика сходится</span>
                 </li>
               </ul>
            </div>
          </div>

          <!-- Stage 2: Traction & Packaging (UPDATED) -->
          <div class="group relative pt-12">
            <!-- Node Point -->
            <div class="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#030712] border-2 border-emerald-500 rounded-full group-hover:border-white group-hover:scale-125 transition-all z-10 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)]">
               <div class="w-2 h-2 bg-emerald-500 rounded-full group-hover:bg-white transition-colors animate-pulse"></div>
            </div>

            <!-- Main Active Card -->
            <div class="bg-[#0a101f] border border-emerald-500/50 hover:border-emerald-400 p-6 rounded-xl backdrop-blur-md transition-all hover:-translate-y-3 h-full flex flex-col shadow-2xl relative overflow-hidden">
               
               <!-- Corner Decor -->
               <div class="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-500/20 to-transparent pointer-events-none"></div>

               <div class="mb-4 flex justify-between items-center">
                  <span class="text-xs font-mono text-emerald-400 uppercase tracking-widest bg-emerald-950/40 px-2 py-1 rounded border border-emerald-900">Stage 1: Packaging</span>
                  <span class="flex h-2 w-2 relative">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
               </div>
               
               <h3 class="text-2xl font-bold text-white mb-2 font-tech uppercase">Traction & VC Pack</h3>
               <p class="text-slate-300 text-sm mb-6 border-b border-emerald-900/30 pb-4">
                 Фонды не верят словам. Мы упаковываем первые продажи в <span class="text-white font-bold">Data Room</span> для инвестора.
               </p>
               
               <div class="space-y-4 mt-auto">
                 <!-- Deliverable 1 -->
                 <div class="flex items-start gap-3 p-2 rounded bg-emerald-900/10 border border-emerald-900/20">
                    <div class="mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-white uppercase font-mono">Investment Deck</h4>
                        <p class="text-[10px] text-slate-400">Дизайн презентации на основе метрик, а не "визионерства".</p>
                    </div>
                 </div>

                 <!-- Deliverable 2 -->
                 <div class="flex items-start gap-3 p-2 rounded bg-emerald-900/10 border border-emerald-900/20">
                    <div class="mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-white uppercase font-mono">Data Room</h4>
                        <p class="text-[10px] text-slate-400">P&L отчет, Когортный анализ (Retention), подтверждение CAC.</p>
                    </div>
                 </div>
               </div>

               <!-- Status Pill -->
               <div class="mt-6 text-center">
                   <span class="text-[10px] font-bold text-black bg-emerald-500 px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                       Investment Ready
                   </span>
               </div>
            </div>
          </div>

          <!-- Stage 3: Series A -->
          <div class="group relative pt-12">
            <!-- Node Point -->
            <div class="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#030712] border-2 border-slate-700 rounded-full group-hover:border-amber-500 group-hover:scale-125 transition-all z-10 flex items-center justify-center">
               <div class="w-2 h-2 bg-slate-500 rounded-full group-hover:bg-amber-400 transition-colors"></div>
            </div>

            <div class="bg-slate-900/20 border border-slate-800 hover:border-amber-500/50 p-6 rounded-xl backdrop-blur-sm transition-all hover:-translate-y-2 h-full flex flex-col shadow-[0_0_0_1px_rgba(0,0,0,0)] hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] opacity-60 hover:opacity-100">
               <div class="mb-4">
                  <span class="text-xs font-mono text-amber-500 uppercase tracking-widest bg-amber-950/30 px-2 py-1 rounded">Stage 2: Scale</span>
               </div>
               <h3 class="text-xl font-bold text-white mb-2 font-tech uppercase">Series A+ Scaling</h3>
               <p class="text-slate-500 text-sm mb-6 border-b border-slate-800/50 pb-4">
                 После раунда: Масштабирование работающей модели x10. Выход на новые рынки.
               </p>
               
               <ul class="space-y-3 mt-auto">
                 <li class="flex items-start gap-3 text-sm text-slate-300">
                   <span class="text-amber-500 font-mono">01</span>
                   <span>Найм In-house команды</span>
                 </li>
                 <li class="flex items-start gap-3 text-sm text-slate-300">
                   <span class="text-amber-500 font-mono">02</span>
                   <span>Внедрение CRM/CDP/ERP</span>
                 </li>
                 <li class="flex items-start gap-3 text-sm text-slate-300">
                   <span class="text-amber-500 font-mono">03</span>
                   <span>Global Expansion</span>
                 </li>
               </ul>
            </div>
          </div>

        </div>

        <!-- Integration Badge -->
        <div class="mt-16 text-center">
          <div class="inline-flex items-center gap-4 p-4 border border-dashed border-slate-700 rounded-lg bg-slate-900/50">
            <div class="flex -space-x-3">
               <div class="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[10px] text-white">IT</div>
               <div class="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[10px] text-white">HR</div>
               <div class="w-8 h-8 rounded-full bg-cyan-700 border-2 border-slate-900 flex items-center justify-center text-[10px] text-white font-bold z-10">YOU</div>
               <div class="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[10px] text-white">Sales</div>
            </div>
            <p class="text-sm text-slate-400 font-mono text-left">
              <span class="text-white font-bold">Seamless Integration:</span><br>
              Мы готовим вашу отчетность так, чтобы Due Diligence проходил без вопросов.
            </p>
          </div>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifecycleComponent {}