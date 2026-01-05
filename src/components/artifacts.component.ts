import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type ArtifactType = 'model' | 'deck' | 'system';

@Component({
  selector: 'app-artifacts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 px-4 sm:px-6 bg-[#030712] relative overflow-hidden border-t border-slate-900">
      
      <div class="max-w-7xl mx-auto relative z-10">
        
        <div class="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          <!-- LEFT: Controls & Context -->
          <div class="md:w-1/3 space-y-8">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full mb-6">
                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-500"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                 <span class="text-[10px] font-mono uppercase text-slate-400">Deliverables Preview</span>
              </div>
              <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 font-tech uppercase">
                Tangible <br/><span class="text-slate-500">Assets</span>
              </h2>
              <p class="text-slate-400 text-sm leading-relaxed">
                Мы не продаем "консультации". Мы внедряем операционную систему. Вот как выглядят инструменты, которые останутся у вас.
              </p>
            </div>

            <!-- Tabs -->
            <div class="space-y-2">
              <button (click)="setActive('model')" class="w-full text-left p-4 rounded-lg border transition-all group relative overflow-hidden"
                 [class.bg-slate-900]="activeTab() !== 'model'"
                 [class.border-slate-800]="activeTab() !== 'model'"
                 [class.bg-emerald-950/20]="activeTab() === 'model'"
                 [class.border-emerald-500/50]="activeTab() === 'model'"
              >
                 <div class="flex items-center gap-3 relative z-10">
                    <div class="w-8 h-8 rounded flex items-center justify-center text-xs font-bold"
                         [class.bg-slate-800]="activeTab() !== 'model'"
                         [class.text-slate-500]="activeTab() !== 'model'"
                         [class.bg-emerald-900]="activeTab() === 'model'"
                         [class.text-emerald-400]="activeTab() === 'model'"
                    >XLS</div>
                    <div>
                       <div class="text-sm font-bold text-white uppercase font-mono">Sovereign P&L Model</div>
                       <div class="text-[10px] text-slate-500">Финмодель, Cashflow, Unit-экономика</div>
                    </div>
                 </div>
              </button>

              <button (click)="setActive('deck')" class="w-full text-left p-4 rounded-lg border transition-all group relative overflow-hidden"
                 [class.bg-slate-900]="activeTab() !== 'deck'"
                 [class.border-slate-800]="activeTab() !== 'deck'"
                 [class.bg-amber-950/20]="activeTab() === 'deck'"
                 [class.border-amber-500/50]="activeTab() === 'deck'"
              >
                 <div class="flex items-center gap-3 relative z-10">
                    <div class="w-8 h-8 rounded flex items-center justify-center text-xs font-bold"
                         [class.bg-slate-800]="activeTab() !== 'deck'"
                         [class.text-slate-500]="activeTab() !== 'deck'"
                         [class.bg-amber-900]="activeTab() === 'deck'"
                         [class.text-amber-400]="activeTab() === 'deck'"
                    >PPT</div>
                    <div>
                       <div class="text-sm font-bold text-white uppercase font-mono">Investor Data Deck</div>
                       <div class="text-[10px] text-slate-500">Презентация на основе данных, а не эмоций</div>
                    </div>
                 </div>
              </button>

              <button (click)="setActive('system')" class="w-full text-left p-4 rounded-lg border transition-all group relative overflow-hidden"
                 [class.bg-slate-900]="activeTab() !== 'system'"
                 [class.border-slate-800]="activeTab() !== 'system'"
                 [class.bg-indigo-950/20]="activeTab() === 'system'"
                 [class.border-indigo-500/50]="activeTab() === 'system'"
              >
                 <div class="flex items-center gap-3 relative z-10">
                    <div class="w-8 h-8 rounded flex items-center justify-center text-xs font-bold"
                         [class.bg-slate-800]="activeTab() !== 'system'"
                         [class.text-slate-500]="activeTab() !== 'system'"
                         [class.bg-indigo-900]="activeTab() === 'system'"
                         [class.text-indigo-400]="activeTab() === 'system'"
                    >SYS</div>
                    <div>
                       <div class="text-sm font-bold text-white uppercase font-mono">Operations System</div>
                       <div class="text-[10px] text-slate-500">Notion-workspace, Регламенты, CRM</div>
                    </div>
                 </div>
              </button>
            </div>
          </div>

          <!-- RIGHT: The Visualizer (CSS Mockups) -->
          <div class="md:w-2/3 relative h-[400px] bg-[#050914] border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center group">
             
             <!-- Grid Background -->
             <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

             <!-- SCENE 1: EXCEL MODEL -->
             @if (activeTab() === 'model') {
               <div class="w-[90%] h-[80%] bg-[#0a0f18] border border-slate-700 rounded shadow-lg flex flex-col animate-fade-in relative overflow-hidden">
                  <!-- Header -->
                  <div class="h-8 bg-[#1e293b] border-b border-slate-700 flex items-center px-3 gap-2">
                     <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                     <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                     <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                     <div class="ml-4 h-4 w-32 bg-slate-600/50 rounded text-[8px] flex items-center px-2 text-slate-300 font-mono">Unit_Economics_v2.xlsx</div>
                  </div>
                  <!-- Cells -->
                  <div class="p-4 grid grid-cols-4 gap-2">
                     <div class="col-span-1 h-6 bg-emerald-900/30 rounded border border-emerald-900/50"></div>
                     <div class="col-span-3 h-6 bg-slate-800/30 rounded"></div>
                     
                     <div class="col-span-4 h-px bg-slate-800 my-1"></div>
                     
                     <div class="col-span-1 h-4 bg-slate-800/50 rounded"></div>
                     <div class="col-span-1 h-4 bg-slate-800/50 rounded"></div>
                     <div class="col-span-1 h-4 bg-slate-800/50 rounded"></div>
                     <div class="col-span-1 h-4 bg-slate-800/50 rounded"></div>

                     <!-- Data Rows -->
                     <div class="col-span-4 space-y-2 mt-2">
                        @for(i of [1,2,3,4,5]; track i) {
                          <div class="grid grid-cols-4 gap-2">
                             <div class="h-4 bg-slate-700/20 rounded w-1/2"></div>
                             <div class="h-4 bg-slate-700/20 rounded"></div>
                             <div class="h-4 bg-slate-700/20 rounded"></div>
                             <div class="h-4 bg-slate-700/20 rounded"></div>
                          </div>
                        }
                     </div>
                     
                     <!-- Focus Highlight -->
                     <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xs bg-[#0f172a] border border-emerald-500 p-4 rounded shadow-2xl scale-110 z-10">
                        <div class="flex justify-between items-center mb-2">
                           <span class="text-xs text-slate-400 font-mono">CAC Payback</span>
                           <span class="text-emerald-400 font-bold font-mono">3.2 months</span>
                        </div>
                        <div class="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                           <div class="h-full bg-emerald-500 w-[70%]"></div>
                        </div>
                     </div>
                  </div>
               </div>
             }

             <!-- SCENE 2: PITCH DECK -->
             @if (activeTab() === 'deck') {
               <div class="w-[80%] aspect-video bg-white text-black p-8 flex flex-col animate-fade-in shadow-2xl relative overflow-hidden">
                  <div class="absolute top-0 right-0 p-4">
                     <div class="w-8 h-8 bg-black"></div>
                  </div>
                  
                  <div class="mt-8 mb-4">
                     <div class="h-8 w-2/3 bg-black mb-2"></div>
                     <div class="h-2 w-1/3 bg-gray-400"></div>
                  </div>
                  
                  <div class="flex gap-4 mt-auto">
                     <div class="flex-1 h-24 bg-amber-500 flex items-end p-2">
                        <div class="w-full h-[40%] bg-white/30"></div>
                     </div>
                     <div class="flex-1 h-24 bg-gray-200 flex items-end p-2">
                        <div class="w-full h-[60%] bg-black/10"></div>
                     </div>
                     <div class="flex-1 h-24 bg-gray-200 flex items-end p-2">
                        <div class="w-full h-[80%] bg-black/10"></div>
                     </div>
                  </div>

                  <!-- Overlay Tag -->
                  <div class="absolute top-4 left-4 bg-amber-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                     Slide 07: Traction
                  </div>
               </div>
             }

             <!-- SCENE 3: SYSTEM/NOTION -->
             @if (activeTab() === 'system') {
               <div class="w-[90%] h-[85%] bg-[#191919] border border-slate-700 rounded-lg flex animate-fade-in relative overflow-hidden text-slate-300 font-sans">
                  <!-- Sidebar -->
                  <div class="w-1/4 bg-[#202020] border-r border-slate-700 p-3 space-y-2 hidden sm:block">
                     <div class="h-2 w-12 bg-slate-600 rounded mb-4"></div>
                     <div class="h-2 w-full bg-slate-700/50 rounded"></div>
                     <div class="h-2 w-full bg-slate-700/50 rounded"></div>
                     <div class="h-2 w-2/3 bg-indigo-500/50 rounded"></div>
                     <div class="h-2 w-full bg-slate-700/50 rounded"></div>
                  </div>
                  <!-- Content -->
                  <div class="flex-1 p-6">
                     <div class="h-32 w-full bg-gradient-to-r from-indigo-900 to-slate-900 rounded-lg mb-6 relative overflow-hidden">
                        <div class="absolute bottom-4 left-4 text-2xl font-bold text-white">Engineering Ops</div>
                     </div>
                     
                     <div class="space-y-3">
                        <div class="flex items-center gap-2 p-2 bg-[#252525] rounded border border-slate-700">
                           <div class="w-4 h-4 border border-slate-500 rounded text-[8px] flex items-center justify-center">✓</div>
                           <span class="text-xs">Hiring Pipeline (Automated)</span>
                           <span class="ml-auto text-[8px] bg-indigo-900 px-1 rounded text-indigo-300">IN PROGRESS</span>
                        </div>
                        <div class="flex items-center gap-2 p-2 bg-[#252525] rounded border border-slate-700">
                           <div class="w-4 h-4 border border-slate-500 rounded text-[8px] flex items-center justify-center">✓</div>
                           <span class="text-xs">Q3 Strategic Goals</span>
                           <span class="ml-auto text-[8px] bg-green-900 px-1 rounded text-green-300">DONE</span>
                        </div>
                     </div>
                  </div>
               </div>
             }

          </div>

        </div>

      </div>
    </section>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95) translateY(10px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtifactsComponent {
  activeTab = signal<ArtifactType>('model');

  setActive(tab: ArtifactType) {
    this.activeTab.set(tab);
  }
}
