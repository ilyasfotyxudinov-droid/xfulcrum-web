import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-author',
  standalone: true,
  template: `
    <section class="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#030712] border-y border-slate-900">
      
      <!-- Tech Decoration Background -->
      <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid-author" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="0.5" class="text-amber-500"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-author)" />
        </svg>
      </div>

      <div class="max-w-6xl mx-auto relative z-10">
        
        <!-- Section Header -->
        <div class="flex items-center gap-4 mb-12">
           <div class="h-px bg-slate-800 flex-1"></div>
           <span class="text-xs font-mono text-amber-500 uppercase tracking-[0.2em]">Operational Protocols</span>
           <div class="h-px bg-slate-800 flex-1"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <!-- LEFT COLUMN: The Standards -->
          <div class="lg:col-span-8 space-y-8">
            <h2 class="text-4xl sm:text-5xl font-bold text-white font-tech uppercase leading-none">
              Архитектура <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Ручного Управления</span>
            </h2>
            
            <p class="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Мы станем вашим рычагом, если вы готовы двигать рынок. Но рычаг требует твердой руки.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              
              <!-- Standard 1: Methodology -->
              <div class="bg-slate-900/40 border-l-2 border-slate-700 p-6 hover:border-amber-500 transition-colors group">
                 <div class="flex items-center gap-3 mb-3">
                    <span class="text-amber-500 font-mono text-xs">01 // CORE</span>
                    <h3 class="text-white font-bold font-tech text-xl uppercase">Y.Practicum Base</h3>
                 </div>
                 <p class="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                   Работа строится на методологии управления проектами в e-commerce для руководителей (Яндекс.Практикум). 
                   Я вижу проект целиком: от RoadMap до P&L отчета.
                 </p>
              </div>

              <!-- Standard 2: Personal Responsibility -->
              <div class="bg-slate-900/40 border-l-2 border-slate-700 p-6 hover:border-amber-500 transition-colors group">
                 <div class="flex items-center gap-3 mb-3">
                    <span class="text-amber-500 font-mono text-xs">02 // NO BROKEN TELEPHONE</span>
                    <h3 class="text-white font-bold font-tech text-xl uppercase">Brain = Hands</h3>
                 </div>
                 <p class="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                   В крупных агентствах стратегию пишет топ, а руками делают джуны (конвейер). 
                   У меня нет "испорченного телефона". Тот, кто считал экономику, лично собирает воронку. Смыслы не теряются.
                 </p>
              </div>

            </div>
          </div>

          <!-- RIGHT COLUMN: The Filter / Access Control -->
          <div class="lg:col-span-4">
            <div class="bg-[#050914] border border-slate-800 rounded-xl overflow-hidden relative group">
               <!-- Warning Stripe -->
               <div class="h-1 w-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600"></div>
               
               <div class="p-8 relative">
                 <div class="absolute top-4 right-4 text-[10px] text-slate-600 font-mono rotate-90 origin-right">CAPACITY LIMIT</div>

                 <h3 class="text-2xl font-bold text-white font-tech uppercase mb-2">Жесткий фильтр</h3>
                 <p class="text-xs text-slate-500 font-mono mb-8 uppercase tracking-wide">
                   Access Protocol: Selective
                 </p>

                 <p class="text-slate-400 text-sm mb-8">
                   Я беру в работу не более 2-3 проектов одновременно. Мне важен потенциал бизнеса и адекватность основателей.
                 </p>

                 <!-- Slots Visualizer -->
                 <div class="space-y-3 mb-8">
                    <div class="flex items-center justify-between p-3 bg-slate-900/50 border border-red-900/30 rounded opacity-50">
                       <span class="text-xs font-mono text-slate-500">SLOT 01 // FINTECH</span>
                       <span class="text-[10px] font-bold text-red-500 uppercase border border-red-900 px-2 py-0.5 rounded bg-red-950/20">Occupied</span>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-slate-900/50 border border-red-900/30 rounded opacity-50">
                       <span class="text-xs font-mono text-slate-500">SLOT 02 // EDTECH</span>
                       <span class="text-[10px] font-bold text-red-500 uppercase border border-red-900 px-2 py-0.5 rounded bg-red-950/20">Occupied</span>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-amber-950/10 border border-amber-500/50 rounded animate-pulse">
                       <span class="text-xs font-mono text-amber-400">SLOT 03 // YOUR PROJECT</span>
                       <span class="text-[10px] font-bold text-emerald-400 uppercase border border-emerald-900 px-2 py-0.5 rounded bg-emerald-950/20">Available</span>
                    </div>
                 </div>

                 <button class="w-full py-4 bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-amber-400 transition-colors font-mono relative overflow-hidden group/btn">
                    <span class="relative z-10">Занять последний слот</span>
                    <div class="absolute inset-0 bg-amber-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                 </button>

               </div>
               
               <!-- Signature / Stamp Effect -->
               <div class="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-slate-800/50 rounded-full flex items-center justify-center -rotate-12 opacity-50 pointer-events-none">
                  <span class="text-slate-800 font-black font-tech text-xl uppercase">Approved</span>
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorComponent {}