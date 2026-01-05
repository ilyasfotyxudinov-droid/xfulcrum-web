import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-methodology',
  standalone: true,
  template: `
    <section class="py-24 px-4 sm:px-6 bg-slate-950/50">
      <div class="max-w-6xl mx-auto">
        
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-5xl font-bold text-white mb-6 font-tech uppercase">
            Почему <span class="text-red-500">Legacy-подход</span> убивает стартапы?
          </h2>
          <p class="text-slate-400 max-w-2xl mx-auto">
            Рынок изменился. Долгая разработка без валидации рынка — это путь к кассовому разрыву. 
            Мы используем <span class="text-emerald-400 font-bold">Zero-Code & Data-Driven</span> подход.
          </p>
        </div>

        <!-- Comparison Table (Mobile: Stacked, Desktop: Grid) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
           
           <!-- VS Badge -->
           <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center text-white font-black font-tech text-xl shadow-xl hidden md:flex">
             VS
           </div>

           <!-- Old Way (Legacy Agencies) -->
           <div class="relative group p-8 rounded-2xl border border-red-900/20 bg-[#0a0505] overflow-hidden">
              <div class="absolute top-0 left-0 w-full h-1 bg-red-900"></div>
              <h3 class="text-2xl font-bold text-red-500 mb-2 font-tech uppercase tracking-wider flex items-center gap-2">
                Typical Dev Shop
              </h3>
              <p class="text-xs text-slate-500 font-mono mb-8 uppercase">Code First / Business Later</p>
              
              <ul class="space-y-8 text-slate-400 font-mono text-sm">
                <!-- Speed -->
                <li class="relative pl-6 border-l border-red-900/30">
                  <div class="text-xs text-red-700 font-bold uppercase mb-1">MVP Launch</div>
                  <div class="text-slate-300 font-bold text-lg">3–6 месяцев</div>
                  <p class="text-xs text-slate-500 mt-1">Пишут код с нуля, не проверяя, нужен ли продукт рынку (TAM/SAM/SOM игнорируется).</p>
                </li>
                
                <!-- Metrics -->
                <li class="relative pl-6 border-l border-red-900/30">
                  <div class="text-xs text-red-700 font-bold uppercase mb-1">Financial Model</div>
                  <div class="text-slate-300 font-bold text-lg">"Посмотрим по факту"</div>
                  <p class="text-xs text-slate-500 mt-1">Нет четкой P&L модели и юнит-экономики до старта. Хаос в деньгах.</p>
                </li>

                <!-- Process -->
                <li class="relative pl-6 border-l border-red-900/30">
                  <div class="text-xs text-red-700 font-bold uppercase mb-1">Investor Relations</div>
                  <div class="text-slate-300 font-bold text-lg">Красивые картинки</div>
                  <p class="text-xs text-slate-500 mt-1">Презентации без твердых цифр. Инвесторы видят риски, а не возможности.</p>
                </li>
              </ul>
           </div>

           <!-- New Way (xFulcrum) -->
           <div class="relative group p-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/5 overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.05)]">
              <div class="absolute top-0 left-0 w-full h-1 bg-emerald-500 shadow-[0_0_20px_#10b981]"></div>
              <h3 class="text-2xl font-bold text-emerald-400 mb-2 font-tech uppercase tracking-wider flex items-center gap-2">
                xFulcrum Strategy
              </h3>
              <p class="text-xs text-emerald-800 font-mono mb-8 uppercase">Validation First / No-Code MVP</p>
              
              <ul class="space-y-8 text-slate-200 font-mono text-sm">
                <!-- Speed -->
                <li class="relative pl-6 border-l border-emerald-500">
                  <div class="text-xs text-emerald-500 font-bold uppercase mb-1">MVP Launch</div>
                  <div class="text-white font-bold text-lg">2–3 недели (Tilda Zero-Block)</div>
                  <p class="text-xs text-slate-400 mt-1">Визуально неотличимо от кастомной разработки, но в 10 раз быстрее. Упаковка продукта для теста.</p>
                </li>
                
                <!-- Metrics -->
                <li class="relative pl-6 border-l border-emerald-500">
                  <div class="text-xs text-emerald-500 font-bold uppercase mb-1">Financial Model</div>
                  <div class="text-white font-bold text-lg">P&L + Unit Economics</div>
                  <p class="text-xs text-slate-400 mt-1">Мы сначала считаем экономику (сходится ли?), потом делаем. Защищаем модель перед инвестором.</p>
                </li>

                <!-- Process -->
                <li class="relative pl-6 border-l border-emerald-500">
                  <div class="text-xs text-emerald-500 font-bold uppercase mb-1">Investor Relations</div>
                  <div class="text-white font-bold text-lg">Data-Driven Pitch</div>
                  <p class="text-xs text-slate-400 mt-1">Презентация, основанная на реальных данных (TAM/SAM/SOM, тренды, аналитика).</p>
                </li>
              </ul>

              <!-- Shine effect -->
              <div class="absolute -right-20 -bottom-20 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>
           </div>

        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MethodologyComponent {}