import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-guarantee',
  standalone: true,
  template: `
    <section class="py-24 px-4 sm:px-6 bg-[#030712] relative overflow-hidden border-t border-slate-900">
      
      <!-- Lock Background Pattern -->
      <div class="absolute inset-0 z-0 opacity-5 pointer-events-none">
         <svg width="100%" height="100%">
            <pattern id="lock-grid" width="60" height="60" patternUnits="userSpaceOnUse">
               <path d="M20 20h20v20H20z" fill="currentColor" class="text-slate-500"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#lock-grid)" />
         </svg>
      </div>

      <div class="max-w-5xl mx-auto relative z-10">
        
        <div class="text-center mb-16">
           <div class="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/30 border border-emerald-900/50 rounded-full mb-6">
             <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
             <span class="text-[10px] font-mono uppercase text-emerald-400">Transaction Security</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold text-white mb-6 font-tech uppercase">
            Risk Management <span class="text-slate-500">Protocol</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mx-auto">
            В маркетинге нет гарантий "100% успеха" (это ложь). Но есть гарантия <span class="text-white font-bold">сохранения капитала</span>. 
            Мы работаем по системе Stop-Loss, защищая обе стороны от потери ресурсов.
          </p>
        </div>

        <!-- The Contract Container -->
        <div class="bg-slate-900/40 border border-slate-700 rounded-2xl relative overflow-hidden backdrop-blur-sm">
           
           <!-- Decorative Header Bar -->
           <div class="h-2 w-full bg-gradient-to-r from-slate-800 via-emerald-900 to-slate-800 border-b border-slate-700"></div>

           <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              
              <!-- Point 1: Audit Safety -->
              <div class="p-8 group hover:bg-slate-800/50 transition-colors">
                 <div class="w-12 h-12 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-center mb-6 text-slate-400 group-hover:text-emerald-400 group-hover:border-emerald-500/50 transition-all">
                    <span class="font-mono font-bold text-lg">01</span>
                 </div>
                 <h3 class="text-white font-bold font-tech text-lg uppercase mb-3">Честный "No-Go"</h3>
                 <p class="text-slate-400 text-sm leading-relaxed">
                   Если на этапе Flash-аудита мы видим, что экономика не сходится и масштабировать нечего — 
                   <span class="text-emerald-400">мы не продаем вам внедрение</span>. 
                   Вы платите только за аудит, экономите миллионы на заведомо провальном продакшене.
                 </p>
              </div>

              <!-- Point 2: Stop-Loss -->
              <div class="p-8 group hover:bg-slate-800/50 transition-colors">
                 <div class="w-12 h-12 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-center mb-6 text-slate-400 group-hover:text-red-400 group-hover:border-red-500/50 transition-all">
                    <span class="font-mono font-bold text-lg">02</span>
                 </div>
                 <h3 class="text-white font-bold font-tech text-lg uppercase mb-3">Stop-Loss System</h3>
                 <p class="text-slate-400 text-sm leading-relaxed">
                   Мы не "осваиваем бюджет". У нас установлены жесткие триггеры: 
                   если гипотеза не показывает плановый ROMI за <span class="text-white">72 часа</span> — трафик останавливается автоматически. 
                   Мы не ждем "конца месяца", чтобы увидеть убытки.
                 </p>
              </div>

              <!-- Point 3: Fair Play -->
              <div class="p-8 group hover:bg-slate-800/50 transition-colors">
                 <div class="w-12 h-12 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-center mb-6 text-slate-400 group-hover:text-amber-400 group-hover:border-amber-500/50 transition-all">
                    <span class="font-mono font-bold text-lg">03</span>
                 </div>
                 <h3 class="text-white font-bold font-tech text-lg uppercase mb-3">Glass Box</h3>
                 <p class="text-slate-400 text-sm leading-relaxed">
                   Никаких "агентских аккаунтов", к которым у вас нет доступа. 
                   Все кабинеты, домены и данные принадлежат вам. Если мы расстаемся — 
                   <span class="text-white">вся инфраструктура и наработки остаются у вас</span>, а не исчезают вместе с нами.
                 </p>
              </div>

           </div>

           <!-- Footer Badge -->
           <div class="bg-slate-950 p-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                 <div class="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
                 <span class="text-xs font-mono text-slate-400 uppercase">SLA Status: ACTIVE</span>
              </div>
              <div class="font-tech text-slate-600 uppercase text-xs tracking-widest">
                 xFulcrum Integrity Core
              </div>
           </div>

        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuaranteeComponent {}