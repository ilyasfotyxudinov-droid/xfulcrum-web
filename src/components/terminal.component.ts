import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="py-24 px-4 sm:px-6 bg-[#0c0c0c] border-y border-slate-900 relative overflow-hidden">
      
      <!-- Background: Future Grid -->
      <div class="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style="background-image: radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0); background-size: 40px 40px;">
      </div>

      <div class="max-w-6xl mx-auto relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <!-- LEFT: The Visionary Offer (Truthful & Strategic) -->
          <div class="space-y-8">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/30 border border-blue-900 rounded-full">
               <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
               </span>
               <span class="text-[10px] font-mono uppercase text-blue-400 tracking-wider">Strategic Architecture // 2026</span>
            </div>
            
            <h2 class="text-3xl sm:text-5xl font-bold text-white font-tech uppercase leading-tight">
              Build an <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Anti-Fragile</span> System
            </h2>
            
            <div class="text-slate-400 text-lg leading-relaxed font-light">
              <p class="mb-4">
                Мы не продаем "успешный успех". Мы делимся инженерной схемой, по которой строим проекты прямо сейчас.
              </p>
              <p class="border-l-2 border-blue-900 pl-4 text-slate-300">
                Рынок 2026 года уничтожит классические иерархии. <br>
                <strong>Забирайте "Vision 2026 Kit"</strong> — набор фреймворков для создания компании, управляемой алгоритмами, а не бюрократией.
              </p>
            </div>

            <!-- Authentic Deliverables List -->
            <ul class="space-y-5">
               <li class="flex items-start gap-4 group">
                  <div class="mt-1 w-8 h-8 rounded bg-slate-900 border border-slate-700 flex flex-shrink-0 items-center justify-center text-slate-400 group-hover:border-blue-500 group-hover:text-blue-400 transition-all">
                    <span class="font-mono text-[10px] font-bold">N</span>
                  </div>
                  <div>
                     <h4 class="text-white font-bold font-mono text-sm uppercase group-hover:text-blue-400 transition-colors">AI-Native Org Chart [Notion]</h4>
                     <p class="text-slate-500 text-xs mt-1">
                       Структура команды, где 60% операционки выполняют AI-агенты. Как нанимать "кентавров", а не просто сотрудников.
                     </p>
                  </div>
               </li>
               
               <li class="flex items-start gap-4 group">
                  <div class="mt-1 w-8 h-8 rounded bg-slate-900 border border-slate-700 flex flex-shrink-0 items-center justify-center text-slate-400 group-hover:border-emerald-500 group-hover:text-emerald-400 transition-all">
                    <span class="font-mono text-[10px] font-bold">X</span>
                  </div>
                  <div>
                     <h4 class="text-white font-bold font-mono text-sm uppercase group-hover:text-emerald-400 transition-colors">Sovereign P&L Model [Excel]</h4>
                     <p class="text-slate-500 text-xs mt-1">
                       Финмодель для эпохи высокой инфляции. Приоритет дивидендов над капитализацией. Расчет точки безубыточности без раундов.
                     </p>
                  </div>
               </li>
               
               <li class="flex items-start gap-4 group">
                  <div class="mt-1 w-8 h-8 rounded bg-slate-900 border border-slate-700 flex flex-shrink-0 items-center justify-center text-slate-400 group-hover:border-purple-500 group-hover:text-purple-400 transition-all">
                    <span class="font-mono text-[10px] font-bold">M</span>
                  </div>
                  <div>
                     <h4 class="text-white font-bold font-mono text-sm uppercase group-hover:text-purple-400 transition-colors">Anti-Fragile Roadmap [Miro]</h4>
                     <p class="text-slate-500 text-xs mt-1">
                       Карта стратегических развилок 2025-2026. На что делать ставку: Deep Tech, локализация или новые рынки?
                     </p>
                  </div>
               </li>
            </ul>
          </div>

          <!-- RIGHT: The Access Port -->
          <div class="relative group">
             <!-- Cyber Glow -->
             <div class="absolute -inset-1 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition duration-500"></div>
             
             <div class="relative bg-[#050914] border border-slate-800 rounded-xl p-8 overflow-hidden">
                
                <!-- Decoration lines -->
                <div class="absolute top-0 right-0 w-20 h-20 border-t border-r border-slate-800 rounded-tr-xl opacity-50"></div>
                <div class="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-slate-800 rounded-bl-xl opacity-50"></div>
                
                @if (!isSuccess()) {
                  <div class="mb-8">
                    <div class="flex items-center justify-between mb-4">
                       <h3 class="text-xl font-bold text-white font-tech uppercase tracking-wider">System Architect Access</h3>
                       <div class="flex gap-1">
                          <div class="w-1 h-1 bg-slate-600 rounded-full"></div>
                          <div class="w-1 h-1 bg-slate-600 rounded-full"></div>
                          <div class="w-1 h-1 bg-slate-600 rounded-full"></div>
                       </div>
                    </div>
                    <p class="text-xs text-slate-500 font-mono border-l-2 border-slate-700 pl-3">
                      Материалы отправляются автоматически. <br>Доступ к базе знаний xFulcrum открыт.
                    </p>
                  </div>

                  <form (submit)="onSubmit($event)" class="space-y-5 relative z-10">
                    <div>
                      <label class="block text-[10px] font-mono uppercase text-slate-500 mb-1.5 flex justify-between">
                        <span>Work Email</span>
                        <span class="text-slate-700">REQUIRED</span>
                      </label>
                      <input 
                        type="email" 
                        [(ngModel)]="email" 
                        name="email"
                        required
                        placeholder="innovator@future.com"
                        class="w-full bg-slate-900/50 border border-slate-700 focus:border-blue-500 text-white px-4 py-3 rounded-none skew-x-[-5deg] focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-mono text-sm placeholder:text-slate-700 placeholder:skew-x-[5deg] text-transform-skew"
                        [disabled]="isLoading()"
                      >
                    </div>
                    
                    <button 
                      type="submit" 
                      [disabled]="isLoading() || !email"
                      class="w-full py-4 bg-white text-black hover:bg-blue-50 font-bold text-xs uppercase tracking-widest transition-all skew-x-[-5deg] relative overflow-hidden group/btn"
                    >
                      <div class="skew-x-[5deg] flex items-center justify-center gap-2 relative z-10">
                        @if (isLoading()) {
                          <span class="animate-pulse">INITIALIZING TRANSFER...</span>
                        } @else {
                          <span>Download Architecture Kit</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover/btn:translate-x-1 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        }
                      </div>
                      <!-- Button hover fill -->
                      <div class="absolute inset-0 bg-blue-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    </button>
                    
                    <div class="flex items-center justify-center gap-2 opacity-50">
                       <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-500"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                       <span class="text-[9px] text-slate-500 font-mono uppercase">Encrypted 256-bit Connection</span>
                    </div>
                  </form>
                } @else {
                  <!-- Success State -->
                  <div class="text-center py-12 animate-fade-in relative">
                    <div class="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                       <div class="w-32 h-32 border border-blue-500 rounded-full animate-ping"></div>
                    </div>
                    
                    <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-900/20 rounded-lg border border-blue-500/50 mb-6 text-blue-400">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <h3 class="text-xl font-bold text-white font-tech uppercase mb-2">Protocol Initiated</h3>
                    <p class="text-slate-400 text-sm mb-8 font-light">
                      Архив отправлен на <span class="text-blue-400 font-mono border-b border-blue-900">{{ email }}</span>.
                      <br>Проверьте папку "Спам", алгоритмы иногда слишком агрессивны.
                    </p>
                    <button (click)="reset()" class="px-6 py-2 border border-slate-700 text-[10px] text-slate-500 hover:text-white hover:border-slate-500 uppercase tracking-widest transition-colors rounded">
                      Reset Terminal
                    </button>
                  </div>
                }

             </div>
          </div>

        </div>

      </div>
    </section>
  `,
  styles: [`
    .text-transform-skew {
      transform: skewX(5deg);
    }
    .animate-fade-in {
      animation: fadeIn 0.5s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TerminalComponent {
  email = '';
  isLoading = signal(false);
  isSuccess = signal(false);

  onSubmit(e: Event) {
    e.preventDefault();
    if (!this.email) return;

    this.isLoading.set(true);

    // Simulate API call
    setTimeout(() => {
      this.isLoading.set(false);
      this.isSuccess.set(true);
    }, 1500);
  }

  reset() {
    this.email = '';
    this.isSuccess.set(false);
  }
}
