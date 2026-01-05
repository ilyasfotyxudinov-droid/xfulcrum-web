import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- СЛОЙ 1: ГЛАВНЫЙ КОНТЕЙНЕР -->
    <header class="fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300">
      
      <!-- СЛОЙ 2: ПОДЛОЖКА -->
      <div class="absolute inset-0 bg-[#030712] opacity-90 border-b border-slate-900 backdrop-blur-md"></div>

      <!-- СЛОЙ 3: СЕТКА -->
      <div class="relative z-10 w-full max-w-[1160px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        
        <!-- ЛОГОТИП -->
        <a href="#" class="flex items-center gap-1 group cursor-pointer no-underline select-none relative z-20">
          <span class="font-tech font-bold text-2xl sm:text-3xl text-white tracking-[0.1em] uppercase flex items-center">
            
            <span class="text-amber-600 group-hover:text-amber-500 transition-colors duration-300 font-mono mr-0.5">x</span>
            
            F
            <span class="relative px-1 mx-0.5 inline-flex justify-center items-center text-white">
               u
               <span class="absolute inset-0 border border-cyan-500/50 shadow-[0_0_10px_rgba(34,211,238,0.3)] bg-cyan-900/10 group-hover:border-cyan-400 group-hover:bg-cyan-900/20 transition-all"></span>
            </span>
            lcrum
          </span>
        </a>

        <!-- МЕНЮ (NAV) - CENTERED ABSOLUTELY -->
        <nav class="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-800 p-1 shadow-lg z-10">
           
           <!-- LINK 1: METHODOLOGY (Why us?) -->
           <a href="#protocol" class="px-5 py-2 rounded-full text-[11px] font-mono uppercase tracking-widest text-slate-400 hover:text-white hover:bg-slate-800 transition-all whitespace-nowrap">
             Protocol
           </a>

           <!-- LINK 2: TOOL (Try it) -->
           <a href="#simulator" class="px-5 py-2 rounded-full text-[11px] font-mono uppercase tracking-widest text-slate-400 hover:text-white hover:bg-slate-800 transition-all whitespace-nowrap">
             Simulation
           </a>

           <!-- LINK 3: PROOF (What I get) -->
           <a href="#artifacts" class="px-5 py-2 rounded-full text-[11px] font-mono uppercase tracking-widest text-emerald-500 hover:text-emerald-400 hover:bg-slate-800 transition-all flex items-center gap-2 whitespace-nowrap">
             <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
             Artifacts
           </a>
        </nav>

        <!-- КНОПКА (CTA) -->
        <div class="flex items-center gap-6 relative z-20">
           <a href="#pricing" class="hidden sm:block text-xs font-mono font-bold text-slate-500 hover:text-white uppercase tracking-wider transition-colors">
             PRICING
           </a>
           
           <button class="bg-amber-600 hover:bg-amber-500 text-black text-xs font-bold font-mono uppercase tracking-widest px-6 py-2.5 clip-path-slant transition-colors relative overflow-hidden group shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <span class="relative z-10">INITIALIZE</span>
              <div class="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12"></div>
           </button>
           
           <!-- Mobile Burger -->
           <button class="lg:hidden text-white">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
           </button>
        </div>

      </div>

    </header>
  `,
  styles: [`
    .clip-path-slant {
      clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 30%);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}