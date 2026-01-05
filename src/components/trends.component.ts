import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-trends',
  standalone: true,
  template: `
    <section class="py-24 px-4 sm:px-6 border-t border-slate-900 bg-[#02050e] relative overflow-hidden">
      
      <!-- Ambient Background Elements -->
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto relative z-10">
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-slate-800 pb-8">
          <div class="max-w-3xl">
            <div class="flex items-center gap-3 mb-4">
               <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
               </span>
               <span class="text-xs font-mono text-indigo-400 uppercase tracking-widest">Strategic Radar // Vision 2026</span>
            </div>
            <h2 class="text-3xl sm:text-5xl font-bold text-white font-tech uppercase leading-tight">
              Вектор Капитала <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">2026</span>
            </h2>
            <p class="text-slate-400 mt-4 max-w-xl text-sm sm:text-base">
              Простое "импортозамещение" заканчивается. К 2026 году рынок РФ перейдет в фазу <strong>Глубокой Технологической Автономии</strong>. Деньги пойдут сюда:
            </p>
          </div>
          
          <div class="text-right hidden md:block">
             <div class="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                <p class="text-[10px] text-slate-500 font-mono uppercase mb-2">Forecast Confidence</p>
                <div class="flex items-center gap-2">
                   <div class="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div class="h-full bg-emerald-500 w-[85%]"></div>
                   </div>
                   <span class="text-emerald-500 font-mono font-bold text-xs">85%</span>
                </div>
             </div>
          </div>
        </div>

        <!-- Trends Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <!-- Trend 1: Deep Tech / Industry 4.0 -->
          <div class="group relative bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 p-6 sm:p-8 transition-all hover:-translate-y-1 overflow-hidden">
             <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
             
             <div class="relative z-10">
                <div class="flex justify-between items-start mb-6">
                   <div class="bg-indigo-950/50 text-indigo-400 px-3 py-1 text-xs font-mono border border-indigo-900 uppercase">Sector: Deep Tech</div>
                   <span class="text-xs font-mono text-slate-500">Trend 01</span>
                </div>
                
                <h3 class="text-xl font-bold text-white mb-3 font-tech uppercase">Industrial Engineering</h3>
                <p class="text-slate-400 text-sm mb-6 leading-relaxed">
                  "Офисный софт" замещен. Следующая волна — <strong>инженерное ПО</strong> (CAD/CAE/PLM) и софт для управления станками. Инвесторы ищут тех, кто заменит Siemens и Autodesk в реальном производстве.
                </p>

                <div class="pt-6 border-t border-slate-800">
                   <div class="flex items-center justify-between text-xs">
                      <span class="text-slate-500 font-mono">Opportunity:</span>
                      <span class="text-indigo-400 font-bold">Hard-Soft Integration</span>
                   </div>
                </div>
             </div>
          </div>

          <!-- Trend 2: Sovereign AI -->
          <div class="group relative bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 p-6 sm:p-8 transition-all hover:-translate-y-1 overflow-hidden">
             <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

             <div class="relative z-10">
                <div class="flex justify-between items-start mb-6">
                   <div class="bg-cyan-950/50 text-cyan-400 px-3 py-1 text-xs font-mono border border-cyan-900 uppercase">Sector: Enterprise AI</div>
                   <span class="text-xs font-mono text-slate-500">Trend 02</span>
                </div>
                
                <h3 class="text-xl font-bold text-white mb-3 font-tech uppercase">On-Premise AI</h3>
                <p class="text-slate-400 text-sm mb-6 leading-relaxed">
                  Корпорации запрещают публичные GPT. К 2026 году стандартом станут <strong>локальные LLM</strong>, развернутые в закрытом контуре (On-premise). Данные не покидают периметр компании.
                </p>

                <div class="pt-6 border-t border-slate-800">
                   <div class="flex items-center justify-between text-xs">
                      <span class="text-slate-500 font-mono">Opportunity:</span>
                      <span class="text-cyan-400 font-bold">Data Security</span>
                   </div>
                </div>
             </div>
          </div>

          <!-- Trend 3: Robonomics -->
          <div class="group relative bg-slate-900/40 border border-slate-800 hover:border-emerald-500/50 p-6 sm:p-8 transition-all hover:-translate-y-1 overflow-hidden">
             <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

             <div class="relative z-10">
                <div class="flex justify-between items-start mb-6">
                   <div class="bg-emerald-950/50 text-emerald-400 px-3 py-1 text-xs font-mono border border-emerald-900 uppercase">Sector: Robotics</div>
                   <span class="text-xs font-mono text-slate-500">Trend 03</span>
                </div>
                
                <h3 class="text-xl font-bold text-white mb-3 font-tech uppercase">Physical Automation</h3>
                <p class="text-slate-400 text-sm mb-6 leading-relaxed">
                  Дефицит людей достигнет пика. Ставки будут сделаны не на HR-tech, а на <strong>физическую робототехнику</strong> (склады, логистика, БПЛА) и автономных агентов, способных работать 24/7 без зарплаты.
                </p>

                <div class="pt-6 border-t border-slate-800">
                   <div class="flex items-center justify-between text-xs">
                      <span class="text-slate-500 font-mono">Opportunity:</span>
                      <span class="text-emerald-400 font-bold">Labor Replacement</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
        
        <!-- Summary Strip / Timeline -->
        <div class="mt-8 relative pt-8 border-t border-slate-800">
            <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-indigo-900 via-indigo-500 to-indigo-900"></div>
            
            <div class="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
                <div class="flex gap-8 font-mono text-slate-500 text-xs uppercase tracking-widest">
                    <span class="opacity-50 line-through">2023: Panic</span>
                    <span class="opacity-70">2024: Stability</span>
                    <span class="text-white font-bold">2025: Growth</span>
                    <span class="text-indigo-400 font-bold">2026: Autonomy</span>
                </div>
                
                <div class="flex items-center gap-3">
                    <span class="text-slate-400 text-xs">Ваша стратегия готова к 2026?</span>
                    <button class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider rounded transition-all">
                        Получить отчет по трендам
                    </button>
                </div>
            </div>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendsComponent {}