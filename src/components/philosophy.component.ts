import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-philosophy',
  standalone: true,
  template: `
    <section class="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#030712]">
      
      <!-- Background Abstract Equation Lines -->
      <svg class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#22d3ee" stroke-width="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#22d3ee" stroke-width="1" />
        <circle cx="50%" cy="50%" r="20%" stroke="#22d3ee" stroke-width="1" fill="none" />
      </svg>

      <!-- Main Container: 1160px Grid -->
      <div class="max-w-[1160px] mx-auto relative z-10">
        
        <!-- Manifesto Header -->
        <div class="flex flex-col lg:flex-row gap-16 mb-20 items-start">
          
          <!-- LEFT: Headline -->
          <div class="lg:w-1/2">
             <div class="inline-block px-3 py-1 border border-cyan-900 bg-cyan-950/30 rounded-sm mb-6">
                <span class="text-cyan-400 font-mono text-xs uppercase tracking-widest">System Core // Philosophy</span>
             </div>
             <h2 class="text-4xl sm:text-6xl font-bold text-white font-tech uppercase leading-[0.9] mb-8">
               We are the <br />
               <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Fulcrum</span>
             </h2>

             <!-- The Narrative Text -->
             <div class="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
                <p>
                  Цели инвестора смещены в сторону <span class="text-emerald-400 font-bold">Денег (EBITDA)</span>. И это хорошо.
                  <br>
                  Цели фаундера смещены в сторону <span class="text-amber-400 font-bold">Продукта (Vision)</span>. И это тоже хорошо.
                </p>
                <p class="border-l-2 border-slate-700 pl-4 italic text-slate-500">
                  Конфликт возникает, когда одна сила подавляет другую. Продукт без экономики умирает. Экономика без инноваций стагнирует.
                </p>
                <p>
                  <strong class="text-white">xFulcrum</strong> — это точка опоры. Инженерный узел, который не дает весам опрокинуться. Мы синхронизируем ваши амбиции с требованиями капитала.
                </p>
             </div>
          </div>

          <!-- RIGHT: The Visual Metaphor (The Scale) -->
          <div class="lg:w-1/2 w-full pt-12">
            <div class="relative h-64 w-full bg-[#050914] border border-slate-800 rounded-xl flex items-center justify-center overflow-hidden">
               
               <!-- Grid BG -->
               <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

               <!-- The Lever Animation -->
               <div class="relative w-3/4">
                  <!-- The Bar -->
                  <div class="h-1 bg-slate-600 w-full relative animate-seesaw origin-center">
                     <!-- Left Weight (Product) -->
                     <div class="absolute -top-12 left-0 flex flex-col items-center">
                        <div class="w-20 h-20 border-2 border-amber-500/50 bg-amber-900/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                           <span class="text-amber-500 font-bold font-tech text-xs">PRODUCT</span>
                        </div>
                        <div class="h-12 w-0.5 bg-amber-500/50"></div>
                     </div>

                     <!-- Right Weight (Capital) -->
                     <div class="absolute -top-12 right-0 flex flex-col items-center">
                        <div class="w-20 h-20 border-2 border-emerald-500/50 bg-emerald-900/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                           <span class="text-emerald-500 font-bold font-tech text-xs">CAPITAL</span>
                        </div>
                        <div class="h-12 w-0.5 bg-emerald-500/50"></div>
                     </div>
                  </div>

                  <!-- The Fulcrum (Triangle) -->
                  <div class="absolute top-1 left-1/2 -translate-x-1/2 flex flex-col items-center">
                     <div class="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-cyan-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                     <span class="mt-2 text-[10px] font-mono text-cyan-400 uppercase tracking-widest">xFulcrum</span>
                  </div>
               </div>

            </div>
            <p class="text-center text-[10px] text-slate-600 font-mono mt-4 uppercase">System Equilibrium Status: <span class="text-cyan-500 animate-pulse">BALANCED</span></p>
          </div>

        </div>

        <!-- The 4 Variables Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          
          <!-- Variable 1: Market -->
          <div class="group relative bg-[#050914] p-8 sm:p-12 hover:bg-[#080c19] transition-colors duration-500">
             <div class="absolute top-6 right-6 font-mono text-xs text-slate-600 group-hover:text-cyan-500 transition-colors">var $x = VOLUME</div>
             <div class="w-12 h-12 mb-6 border border-slate-700 rounded bg-slate-900 flex items-center justify-center text-slate-400 group-hover:border-cyan-500 group-hover:text-cyan-400 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
             </div>
             <h3 class="text-xl font-bold text-white mb-2 font-tech uppercase tracking-wider">Объем рынка (TAM)</h3>
             <p class="text-slate-400 text-sm leading-relaxed mb-4">
               Иллюзия: "Наш продукт нужен всем". 
               <br>Реальность: Нужно найти конкретный сегмент (SOM), готовый платить прямо сейчас.
             </p>
          </div>

          <!-- Variable 2: Unit -->
          <div class="group relative bg-[#050914] p-8 sm:p-12 hover:bg-[#080c19] transition-colors duration-500">
             <div class="absolute top-6 right-6 font-mono text-xs text-slate-600 group-hover:text-emerald-500 transition-colors">var $x = UNIT</div>
             <div class="w-12 h-12 mb-6 border border-slate-700 rounded bg-slate-900 flex items-center justify-center text-slate-400 group-hover:border-emerald-500 group-hover:text-emerald-400 transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
             </div>
             <h3 class="text-xl font-bold text-white mb-2 font-tech uppercase tracking-wider">Экономика (Unit)</h3>
             <p class="text-slate-400 text-sm leading-relaxed mb-4">
               Что мы масштабируем? Убытки или прибыль?
               Находим ту единицу масштабирования, которая сходится в P&L отчете.
             </p>
          </div>

          <!-- Variable 3: Human -->
          <div class="group relative bg-[#050914] p-8 sm:p-12 hover:bg-[#080c19] transition-colors duration-500">
             <div class="absolute top-6 right-6 font-mono text-xs text-slate-600 group-hover:text-amber-500 transition-colors">var $x = JTBD</div>
             <div class="w-12 h-12 mb-6 border border-slate-700 rounded bg-slate-900 flex items-center justify-center text-slate-400 group-hover:border-amber-500 group-hover:text-amber-400 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
             </div>
             <h3 class="text-xl font-bold text-white mb-2 font-tech uppercase tracking-wider">Аватар (Human)</h3>
             <p class="text-slate-400 text-sm leading-relaxed mb-4">
               Кто покупает? И главное — <span class="text-slate-200">какую работу (Jobs To Be Done)</span> он нанимает выполнять ваш продукт?
             </p>
          </div>

          <!-- Variable 4: Capital -->
          <div class="group relative bg-[#050914] p-8 sm:p-12 hover:bg-[#080c19] transition-colors duration-500">
             <div class="absolute top-6 right-6 font-mono text-xs text-slate-600 group-hover:text-purple-500 transition-colors">var $x = CAPITAL</div>
             <div class="w-12 h-12 mb-6 border border-slate-700 rounded bg-slate-900 flex items-center justify-center text-slate-400 group-hover:border-purple-500 group-hover:text-purple-400 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
             </div>
             <h3 class="text-xl font-bold text-white mb-2 font-tech uppercase tracking-wider">Инвестор (ROI)</h3>
             <p class="text-slate-400 text-sm leading-relaxed mb-4">
               Деньги — это топливо. Мы упаковываем метрики так, чтобы инвестор видел не "рискованную идею", а "понятный актив".
             </p>
          </div>

        </div>

      </div>
    </section>
  `,
  styles: [`
    .animate-seesaw {
      animation: seesaw 4s ease-in-out infinite;
    }
    @keyframes seesaw {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(2deg); }
      75% { transform: rotate(-2deg); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhilosophyComponent {}