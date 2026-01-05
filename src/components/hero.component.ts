import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="relative min-h-screen flex flex-col pt-20 bg-[#030712] overflow-hidden">
      
      <!-- Background Effects -->
      <div class="absolute inset-0 z-0 pointer-events-none">
        <!-- Subtle gradient mesh -->
        <div class="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-blue-900/5 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-amber-900/5 rounded-full blur-[100px]"></div>
        
        <!-- Grid -->
        <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
      </div>

      <!-- MAIN CONTENT WRAPPER -->
      <div class="flex-1 flex flex-col justify-center items-center relative z-10 px-4 sm:px-6 pb-24">
        
        <!-- ALERT BADGE -->
        <div class="inline-flex items-center gap-3 px-4 py-2 bg-red-950/20 border border-red-900/50 rounded mb-10 animate-fade-in-up">
           <div class="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_#ef4444]"></div>
           <span class="text-[10px] sm:text-xs font-mono font-bold text-red-500 uppercase tracking-[0.15em]">
             Critical Alert: 80% of IT-Startups die in year 1
           </span>
        </div>

        <!-- HEADLINE: DON'T PITCH HYPOTHESES -->
        <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white font-tech uppercase tracking-tight mb-8 leading-[0.85] text-center animate-fade-in-up delay-100">
          Don't Pitch <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">Hypotheses</span>
        </h1>

        <!-- SUBTEXT -->
        <p class="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed text-center animate-fade-in-up delay-200 font-light">
          Инвесторы не покупают "идеи". Они покупают <strong class="text-white">Predictable Revenue</strong>. <br class="hidden sm:block">
          Мы заменяем ваши "галлюцинации" на твердые метрики: <span class="text-emerald-400 font-mono">TAM, CAC, LTV</span>.
        </p>

        <!-- CTA BUTTONS: WHITE BOX STYLE -->
        <div class="flex flex-col sm:flex-row gap-6 items-center animate-fade-in-up delay-300">
           <a href="#simulator" class="bg-white hover:bg-slate-200 text-black h-14 px-8 flex items-center justify-center font-bold text-xs uppercase tracking-widest clip-path-slant transition-colors relative overflow-hidden group shadow-[0_0_25px_rgba(255,255,255,0.15)] min-w-[240px]">
             <span class="relative z-10 flex items-center gap-2">
               Get Investment Ready
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
             </span>
           </a>
           
           <a href="#protocol" class="text-xs font-mono uppercase text-slate-500 hover:text-white transition-colors tracking-widest flex items-center gap-2 group">
             See why they fail
             <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
           </a>
        </div>

      </div>

      <!-- BOTTOM BAR: OPTIMIZED FOR (Replaces Ticker visually) -->
      <div class="relative z-10 border-t border-slate-900 bg-[#050914]">
        <div class="max-w-[1160px] mx-auto w-full">
           <div class="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-900 border-b md:border-b-0 border-slate-900">
              
              <!-- Label -->
              <div class="p-6 flex items-center justify-center md:justify-start">
                 <span class="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">Optimized For:</span>
              </div>

              <!-- Segment 1: Pre-Seed -->
              <div class="p-6 flex items-center gap-4 group hover:bg-slate-900/50 transition-colors">
                 <div class="w-2 h-2 rounded-full bg-blue-500 group-hover:animate-pulse"></div>
                 <div>
                    <div class="text-xs font-bold text-white uppercase font-tech tracking-wider">Pre-Seed</div>
                    <div class="text-[9px] text-slate-500 font-mono uppercase">Validation Phase</div>
                 </div>
              </div>

              <!-- Segment 2: Series A -->
              <div class="p-6 flex items-center gap-4 group hover:bg-slate-900/50 transition-colors">
                 <div class="w-2 h-2 rounded-full bg-amber-500 group-hover:animate-pulse"></div>
                 <div>
                    <div class="text-xs font-bold text-white uppercase font-tech tracking-wider">Series A</div>
                    <div class="text-[9px] text-slate-500 font-mono uppercase">Scaling Phase</div>
                 </div>
              </div>

              <!-- Segment 3: M&A -->
              <div class="p-6 flex items-center gap-4 group hover:bg-slate-900/50 transition-colors">
                 <div class="w-2 h-2 rounded-full bg-emerald-500 group-hover:animate-pulse"></div>
                 <div>
                    <div class="text-xs font-bold text-white uppercase font-tech tracking-wider">M&A Deal</div>
                    <div class="text-[9px] text-slate-500 font-mono uppercase">Exit Strategy</div>
                 </div>
              </div>

           </div>
        </div>
      </div>

    </section>
  `,
  styles: [`
    .clip-path-slant {
      clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 30%);
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      opacity: 0;
      transform: translateY(20px);
    }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}