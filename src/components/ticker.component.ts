import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticker',
  imports: [CommonModule],
  template: `
    <!-- Changed: Removed fixed positioning, added relative layout, increased height slightly -->
    <div class="w-full z-10 bg-[#0a0f18] border-y border-slate-800 h-12 flex items-center overflow-hidden select-none relative">
      
      <!-- Label -->
      <div class="absolute left-0 top-0 h-full bg-amber-600 px-4 flex items-center z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
         <span class="text-[10px] font-bold text-black font-mono uppercase tracking-widest">Market Context</span>
         <div class="absolute right-[-10px] top-0 h-full w-4 bg-gradient-to-r from-amber-600 to-transparent"></div>
      </div>

      <!-- Marquee Wrapper -->
      <div class="flex animate-marquee whitespace-nowrap pl-32 items-center h-full">
        @for (item of items; track item.label) {
          <div class="flex items-center gap-2 mx-8 text-xs font-mono">
             <span class="text-slate-500 uppercase">{{ item.label }}:</span>
             <span [class.text-emerald-500]="item.change > 0" 
                   [class.text-red-500]="item.change < 0"
                   class="font-bold">
               {{ item.value }} 
               <span class="opacity-70 text-[10px]">({{ item.change > 0 ? '+' : '' }}{{ item.change }}%)</span>
             </span>
          </div>
          <span class="text-slate-800 text-[10px]">///</span>
        }
        <!-- Duplicate for loop -->
        @for (item of items; track item.label + '_dup') {
          <div class="flex items-center gap-2 mx-8 text-xs font-mono">
             <span class="text-slate-500 uppercase">{{ item.label }}:</span>
             <span [class.text-emerald-500]="item.change > 0" 
                   [class.text-red-500]="item.change < 0"
                   class="font-bold">
               {{ item.value }} 
               <span class="opacity-70 text-[10px]">({{ item.change > 0 ? '+' : '' }}{{ item.change }}%)</span>
             </span>
          </div>
          <span class="text-slate-800 text-[10px]">///</span>
        }
      </div>

      <!-- Right Fade -->
      <div class="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none"></div>

    </div>
  `,
  styles: [`
    .animate-marquee {
      animation: marquee 60s linear infinite;
    }
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TickerComponent {
  items = [
    { label: 'SaaS Multiplier (Median)', value: '7.2x', change: 1.2 },
    { label: 'Avg CAC (FinTech)', value: '$450', change: 5.4 },
    { label: 'Seed Round (Avg)', value: '$3.2M', change: -2.1 },
    { label: 'Dev Salaries (Senior)', value: '$8k/mo', change: 8.5 },
    { label: 'Cloud Spend Index', value: '112.4', change: 3.2 },
    { label: 'Inflation (Real)', value: '14.5%', change: 0.5 },
    { label: 'AI Hardware Index', value: '2,450', change: 12.8 },
    { label: 'Startup Failure Rate', value: '82%', change: 1.5 }
  ];
}
