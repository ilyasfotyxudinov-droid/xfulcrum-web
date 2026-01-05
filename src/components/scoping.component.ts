import { Component, ChangeDetectionStrategy, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-scoping',
  imports: [CommonModule, FormsModule],
  template: `
    <section class="py-24 px-4 sm:px-6 bg-[#02040a] border-t border-slate-900 relative overflow-hidden min-h-screen flex items-center" id="audit">
      
      <!-- Background Cyber Grid -->
      <div class="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style="background-image: linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px); background-size: 50px 50px;">
      </div>
      
      <!-- Ambient Glows -->
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        <!-- LEFT COLUMN: System Context & Logs (The "Brain") -->
        <div class="lg:col-span-5 space-y-8 sticky top-24">
          
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/20 border border-amber-900/50 rounded mb-6">
               <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
               </span>
               <span class="text-[10px] font-mono uppercase text-amber-500 tracking-widest">System Active</span>
            </div>
            <h2 class="text-4xl sm:text-6xl font-bold text-white mb-6 font-tech uppercase leading-[0.9]">
              Strategic <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Audit Core</span>
            </h2>
            <p class="text-slate-400 text-lg leading-relaxed border-l-2 border-slate-800 pl-6">
              Алгоритм анализирует 4 ключевых параметра вашего бизнеса, чтобы сгенерировать персональный <span class="text-white font-bold">Execution Plan</span>.
            </p>
          </div>

          <!-- Dynamic System Log -->
          <div class="bg-black/50 border border-slate-800 rounded-lg p-6 font-mono text-xs overflow-hidden relative min-h-[200px]">
             <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-amber-900 to-slate-800 opacity-50"></div>
             <div class="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
                <span class="text-slate-500 uppercase">System Log // Live</span>
                <span class="text-emerald-500">{{ progress() | number:'1.0-0' }}% Complete</span>
             </div>
             
             <div class="space-y-2 flex flex-col-reverse">
                @for(log of logs(); track log) {
                   <div class="text-emerald-400/80 animate-fade-in-up">
                      <span class="text-slate-600 mr-2">[{{ getCurrentTime() }}]</span>
                      > {{ log }}
                   </div>
                }
             </div>

             <!-- Scanning line overlay -->
             <div class="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent h-10 w-full animate-scan pointer-events-none"></div>
          </div>

        </div>

        <!-- RIGHT COLUMN: The Interface (The "Terminal") -->
        <div class="lg:col-span-7">
           
           <div class="bg-[#050914]/80 backdrop-blur-xl border border-slate-700 rounded-2xl overflow-hidden shadow-2xl relative">
              
              <!-- Header Bar -->
              <div class="h-12 bg-slate-900/50 border-b border-slate-700 flex items-center justify-between px-6">
                 <div class="flex gap-2">
                    <div class="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div class="w-3 h-3 rounded-full bg-slate-700"></div>
                 </div>
                 <div class="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Step 0{{ step() }} / 05
                 </div>
              </div>

              <!-- Content Area -->
              <div class="p-6 sm:p-10 min-h-[450px] flex flex-col relative">
                
                 <!-- Back Navigation -->
                 @if (step() > 1 && step() < 6) {
                    <button (click)="goBack()" class="absolute top-6 left-6 sm:left-10 text-xs font-mono text-slate-500 hover:text-white uppercase flex items-center gap-2 transition-colors z-20">
                       <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                       Return
                    </button>
                 }

                 <!-- STEPS RENDERER -->
                 <div class="flex-1 flex flex-col justify-center">

                   <!-- STEP 1: STAGE -->
                   @if (step() === 1) {
                     <div class="animate-fade-in space-y-8">
                        <h3 class="text-2xl text-white font-tech uppercase text-center mb-8">
                          Определите текущий статус <span class="text-amber-500">системы</span>
                        </h3>
                        <div class="grid grid-cols-1 gap-4">
                           <button (click)="selectStage('Idea')" class="group relative p-6 border border-slate-700 bg-slate-900/40 hover:bg-slate-800 hover:border-amber-500 rounded-xl transition-all text-left flex items-center gap-6 overflow-hidden">
                              <div class="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                              <div class="text-4xl font-black text-slate-700 group-hover:text-amber-500 transition-colors font-tech">01</div>
                              <div class="relative z-10">
                                <div class="text-white font-bold uppercase mb-1 text-lg">Idea / Hypothesis</div>
                                <div class="text-sm text-slate-400">Есть видение, но нет подтвержденного продукта.</div>
                              </div>
                              <div class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-amber-500">>>></div>
                           </button>

                           <button (click)="selectStage('MVP')" class="group relative p-6 border border-slate-700 bg-slate-900/40 hover:bg-slate-800 hover:border-amber-500 rounded-xl transition-all text-left flex items-center gap-6 overflow-hidden">
                              <div class="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                              <div class="text-4xl font-black text-slate-700 group-hover:text-amber-500 transition-colors font-tech">02</div>
                              <div class="relative z-10">
                                <div class="text-white font-bold uppercase mb-1 text-lg">MVP / Launch</div>
                                <div class="text-sm text-slate-400">Продукт запущен, есть первые метрики.</div>
                              </div>
                              <div class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-amber-500">>>></div>
                           </button>

                           <button (click)="selectStage('Scale')" class="group relative p-6 border border-slate-700 bg-slate-900/40 hover:bg-slate-800 hover:border-amber-500 rounded-xl transition-all text-left flex items-center gap-6 overflow-hidden">
                              <div class="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                              <div class="text-4xl font-black text-slate-700 group-hover:text-amber-500 transition-colors font-tech">03</div>
                              <div class="relative z-10">
                                <div class="text-white font-bold uppercase mb-1 text-lg">Growth / Series A</div>
                                <div class="text-sm text-slate-400">Системные продажи, нужен кратный рост.</div>
                              </div>
                              <div class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-amber-500">>>></div>
                           </button>
                        </div>
                     </div>
                   }

                   <!-- STEP 2: TEAM -->
                   @if (step() === 2) {
                     <div class="animate-fade-in space-y-8">
                        <h3 class="text-2xl text-white font-tech uppercase text-center mb-8">
                          Операционный <span class="text-amber-500">Ресурс</span>
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                           <!-- Card 1 -->
                           <button (click)="selectTeam('Solo')" class="group h-full p-6 border border-slate-700 bg-slate-900/40 hover:border-amber-500 hover:-translate-y-1 transition-all rounded-xl flex flex-col items-center text-center">
                              <div class="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-amber-900/20 group-hover:text-amber-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                              </div>
                              <div class="font-bold text-white uppercase mb-2">Solo Founder</div>
                              <div class="text-xs text-slate-500 leading-tight">Один в поле воин.</div>
                           </button>
                           <!-- Card 2 -->
                           <button (click)="selectTeam('Core Team')" class="group h-full p-6 border border-slate-700 bg-slate-900/40 hover:border-amber-500 hover:-translate-y-1 transition-all rounded-xl flex flex-col items-center text-center">
                              <div class="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-amber-900/20 group-hover:text-amber-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                              </div>
                              <div class="font-bold text-white uppercase mb-2">Small Team</div>
                              <div class="text-xs text-slate-500 leading-tight">2-10 человек. Core Unit.</div>
                           </button>
                           <!-- Card 3 -->
                           <button (click)="selectTeam('Org')" class="group h-full p-6 border border-slate-700 bg-slate-900/40 hover:border-amber-500 hover:-translate-y-1 transition-all rounded-xl flex flex-col items-center text-center">
                              <div class="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-amber-900/20 group-hover:text-amber-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                              </div>
                              <div class="font-bold text-white uppercase mb-2">Company</div>
                              <div class="text-xs text-slate-500 leading-tight">Структура, отделы, процессы.</div>
                           </button>
                        </div>
                     </div>
                   }

                   <!-- STEP 3: RUNWAY -->
                   @if (step() === 3) {
                     <div class="animate-fade-in space-y-8">
                        <h3 class="text-2xl text-white font-tech uppercase text-center mb-8">
                          Запас <span class="text-amber-500">Прочности</span> (Runway)
                        </h3>
                        <div class="grid grid-cols-1 gap-3">
                           <button (click)="selectRunway('Critical')" class="group relative p-4 border border-red-900/50 bg-red-950/10 hover:bg-red-950/20 hover:border-red-500 transition-all rounded-lg flex items-center gap-4">
                              <div class="w-2 h-full absolute left-0 top-0 bg-red-600 rounded-l"></div>
                              <div class="ml-4 flex-1 text-left">
                                <div class="text-red-400 font-bold uppercase font-mono">CRITICAL: < 3 MONTHS</div>
                                <div class="text-xs text-slate-500">Нужны экстренные меры. Режим выживания.</div>
                              </div>
                              <div class="text-red-500 opacity-0 group-hover:opacity-100 font-mono">SELECT ></div>
                           </button>

                           <button (click)="selectRunway('Stable')" class="group relative p-4 border border-slate-700 bg-slate-900/40 hover:border-amber-500 transition-all rounded-lg flex items-center gap-4">
                              <div class="w-2 h-full absolute left-0 top-0 bg-amber-600 rounded-l"></div>
                              <div class="ml-4 flex-1 text-left">
                                <div class="text-white font-bold uppercase font-mono">NORMAL: 3 - 9 MONTHS</div>
                                <div class="text-xs text-slate-500">Есть время на гипотезы, но нет права на ошибку.</div>
                              </div>
                              <div class="text-amber-500 opacity-0 group-hover:opacity-100 font-mono">SELECT ></div>
                           </button>

                           <button (click)="selectRunway('Secure')" class="group relative p-4 border border-slate-700 bg-slate-900/40 hover:border-emerald-500 transition-all rounded-lg flex items-center gap-4">
                              <div class="w-2 h-full absolute left-0 top-0 bg-emerald-600 rounded-l"></div>
                              <div class="ml-4 flex-1 text-left">
                                <div class="text-emerald-400 font-bold uppercase font-mono">SECURE: 12+ MONTHS</div>
                                <div class="text-xs text-slate-500">Фокус на долгосрочную стратегию и захват рынка.</div>
                              </div>
                              <div class="text-emerald-500 opacity-0 group-hover:opacity-100 font-mono">SELECT ></div>
                           </button>
                        </div>
                     </div>
                   }

                   <!-- STEP 4: GOAL -->
                   @if (step() === 4) {
                     <div class="animate-fade-in space-y-8">
                        <h3 class="text-2xl text-white font-tech uppercase text-center mb-8">
                          Ключевой <span class="text-amber-500">Барьер</span>
                        </h3>
                        <div class="grid grid-cols-2 gap-4">
                           <button (click)="selectGoal('Investments')" class="p-6 border border-slate-700 bg-slate-900/40 hover:bg-slate-800 hover:border-amber-500 rounded-xl text-left hover:scale-[1.02] transition-all">
                              <span class="text-xs font-mono text-amber-500 uppercase">Challenge A</span>
                              <div class="text-white font-bold text-lg mt-1 mb-2">Fundraising</div>
                              <p class="text-xs text-slate-500">Не могу привлечь инвестиции. Инвесторы отказывают.</p>
                           </button>
                           <button (click)="selectGoal('Strategy')" class="p-6 border border-slate-700 bg-slate-900/40 hover:bg-slate-800 hover:border-amber-500 rounded-xl text-left hover:scale-[1.02] transition-all">
                              <span class="text-xs font-mono text-amber-500 uppercase">Challenge B</span>
                              <div class="text-white font-bold text-lg mt-1 mb-2">Chaos</div>
                              <p class="text-xs text-slate-500">Хаос в процессах. Команда растет, эффективность падает.</p>
                           </button>
                           <button (click)="selectGoal('Sales')" class="p-6 border border-slate-700 bg-slate-900/40 hover:bg-slate-800 hover:border-amber-500 rounded-xl text-left hover:scale-[1.02] transition-all">
                              <span class="text-xs font-mono text-amber-500 uppercase">Challenge C</span>
                              <div class="text-white font-bold text-lg mt-1 mb-2">Traction</div>
                              <p class="text-xs text-slate-500">Нет продаж или они слишком дорогие (высокий CAC).</p>
                           </button>
                           <button (click)="selectGoal('Audit')" class="p-6 border border-slate-700 bg-slate-900/40 hover:bg-slate-800 hover:border-amber-500 rounded-xl text-left hover:scale-[1.02] transition-all">
                              <span class="text-xs font-mono text-amber-500 uppercase">Challenge D</span>
                              <div class="text-white font-bold text-lg mt-1 mb-2">Vision</div>
                              <p class="text-xs text-slate-500">Уперлись в потолок. Не понимаю, куда двигать продукт.</p>
                           </button>
                        </div>
                     </div>
                   }

                   <!-- STEP 5: CONTACT -->
                   @if (step() === 5) {
                     <div class="animate-fade-in w-full max-w-sm mx-auto">
                        <div class="text-center mb-8">
                           <div class="inline-block p-4 rounded-full bg-emerald-900/20 border border-emerald-500/50 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                           </div>
                           <h3 class="text-2xl font-bold text-white font-tech uppercase">Diagnostics Complete</h3>
                           <p class="text-xs text-slate-400 mt-2 font-mono">
                             Data compiled for: {{ data.stage }} / {{ data.goal }}
                           </p>
                        </div>

                        <form (submit)="onSubmit($event)" class="space-y-4">
                           <div class="relative group">
                             <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-900 rounded opacity-50 group-hover:opacity-100 transition duration-500 blur"></div>
                             <input 
                               type="text" 
                               [(ngModel)]="contact" 
                               name="contact"
                               required
                               placeholder="ENTER CONTACT (TG/EMAIL)"
                               class="relative w-full bg-[#02040a] border border-slate-700 text-white px-4 py-4 rounded focus:outline-none focus:border-amber-500 transition-all font-mono text-sm text-center tracking-widest uppercase placeholder:text-slate-700"
                             >
                           </div>
                           
                           <button 
                              type="submit"
                              [disabled]="!contact || isSubmitting()"
                              class="w-full py-4 bg-amber-600 hover:bg-amber-500 text-black font-bold text-sm uppercase tracking-widest rounded transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] relative overflow-hidden group/btn disabled:opacity-50 disabled:cursor-not-allowed"
                           >
                              <span class="relative z-10 flex items-center justify-center gap-2">
                                {{ isSubmitting() ? 'PROCESSING DATA...' : 'INITIALIZE PROTOCOL' }}
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                              </span>
                              <div class="absolute inset-0 bg-white/40 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 skew-x-12"></div>
                           </button>
                        </form>
                     </div>
                   }

                   <!-- STEP 6: SUCCESS -->
                   @if (step() === 6) {
                     <div class="animate-fade-in text-center flex flex-col items-center justify-center h-full">
                        <div class="w-20 h-20 border-4 border-slate-800 rounded-full flex items-center justify-center mb-6 relative">
                           <div class="absolute inset-0 border-4 border-emerald-500 rounded-full animate-ping opacity-20"></div>
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <h3 class="text-3xl text-white font-bold font-tech uppercase mb-2">Application Queued</h3>
                        <p class="text-slate-400 text-sm mb-8 max-w-xs mx-auto">
                           Мы свяжемся с вами в течение 24 часов. Подготовьте доступ к аналитике, если он есть.
                        </p>
                        <div class="bg-black border border-slate-800 px-6 py-3 rounded font-mono text-xs text-slate-500">
                           Ticket ID: <span class="text-emerald-500 font-bold">#{{ ticketId }}</span>
                        </div>
                     </div>
                   }

                 </div>
              </div>

              <!-- Decor footer -->
              <div class="h-2 bg-slate-900/50 border-t border-slate-800 flex">
                 <div class="w-1/3 bg-amber-500/20"></div>
                 <div class="w-1/3 bg-transparent"></div>
                 <div class="w-1/3 bg-amber-500/20"></div>
              </div>
              
           </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.4s ease-out forwards;
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.3s ease-out forwards;
    }
    .animate-scan {
      animation: scan 3s linear infinite;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(5px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes scan {
      0% { top: -20%; }
      100% { top: 120%; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScopingComponent {
  step = signal(1);
  contact = '';
  isSubmitting = signal(false);
  ticketId = Math.floor(1000 + Math.random() * 9000);
  
  // Real-time logs simulation
  logs = signal<string[]>(['System initialized...', 'Waiting for user input...']);

  data = {
    stage: '',
    team: '',
    runway: '',
    goal: ''
  };

  progress = computed(() => {
    return Math.min(100, (this.step() / 6) * 100);
  });

  addLog(msg: string) {
    this.logs.update(prev => [...prev.slice(-6), msg]); // Keep last 7 logs
  }

  getCurrentTime() {
    const now = new Date();
    return `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`;
  }

  goBack() {
    this.addLog('Navigation: Return to previous step');
    this.step.update(s => Math.max(1, s - 1));
  }

  selectStage(val: string) {
    this.data.stage = val;
    this.addLog(`Input Received: Lifecycle Phase = [${val}]`);
    this.addLog('Analysing market fit...');
    setTimeout(() => this.step.set(2), 400);
  }

  selectTeam(val: string) {
    this.data.team = val;
    this.addLog(`Input Received: Resource = [${val}]`);
    this.addLog('Calculating burn rate efficiency...');
    setTimeout(() => this.step.set(3), 400);
  }

  selectRunway(val: string) {
    this.data.runway = val;
    this.addLog(`Input Received: Financial Runway = [${val}]`);
    this.addLog('Risk assessment updated.');
    setTimeout(() => this.step.set(4), 400);
  }

  selectGoal(val: string) {
    this.data.goal = val;
    this.addLog(`Target Locked: [${val}]`);
    this.addLog('Generating protocol...');
    setTimeout(() => this.step.set(5), 400);
  }

  onSubmit(e: Event) {
    e.preventDefault();
    if (!this.contact) return;
    
    this.isSubmitting.set(true);
    this.addLog(`Contact Info: [ENCRYPTED]`);
    this.addLog('Sending packet to server...');
    
    // Simulate API
    setTimeout(() => {
       this.isSubmitting.set(false);
       this.addLog('Transmission Complete.');
       this.step.set(6);
    }, 1500);
  }
}
