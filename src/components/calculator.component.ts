import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="py-24 px-4 sm:px-6 bg-[#02040a] relative border-t border-slate-900">
      
      <!-- Background Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-6xl mx-auto relative z-10">
        
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full mb-4">
             <div class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
             <span class="text-[10px] font-mono uppercase text-slate-400">Interactive Module</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold text-white mb-4 font-tech uppercase">
            Unit Economics <span class="text-cyan-500">Simulator</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Инвесторы не верят презентациям. Они верят математике. Проверьте жизнеспособность вашей бизнес-модели прямо сейчас.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/40 border border-slate-800 p-6 sm:p-10 rounded-2xl backdrop-blur-sm shadow-2xl">
          
          <!-- INPUTS COLUMN -->
          <div class="lg:col-span-7 space-y-8">
            
            <!-- CAC Slider -->
            <div class="space-y-4">
              <div class="flex justify-between items-end">
                <label class="text-sm font-mono text-slate-400 uppercase">CAC (Стоимость клиента)</label>
                <span class="text-xl font-bold font-mono text-white">{{ cac() | number }} ₽</span>
              </div>
              <input 
                type="range" 
                min="500" 
                max="50000" 
                step="500"
                [ngModel]="cac()" 
                (ngModelChange)="cac.set(+$event)"
                class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              >
              <p class="text-xs text-slate-600">Сколько вы тратите на маркетинг, чтобы получить 1 платящего пользователя.</p>
            </div>

            <!-- LTV Slider -->
            <div class="space-y-4">
              <div class="flex justify-between items-end">
                <label class="text-sm font-mono text-slate-400 uppercase">LTV (Доход с клиента)</label>
                <span class="text-xl font-bold font-mono text-white">{{ ltv() | number }} ₽</span>
              </div>
              <input 
                type="range" 
                min="5000" 
                max="500000" 
                step="5000"
                [ngModel]="ltv()" 
                (ngModelChange)="ltv.set(+$event)"
                class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              >
              <p class="text-xs text-slate-600">Сколько денег приносит клиент за все время жизни (Life Time Value).</p>
            </div>

            <!-- Burn Rate Slider -->
            <div class="space-y-4 pt-4 border-t border-slate-800/50">
               <div class="flex justify-between items-end">
                <label class="text-sm font-mono text-slate-400 uppercase">Monthly Burn Rate</label>
                <span class="text-xl font-bold font-mono text-red-400">{{ burnRate() | number }} ₽</span>
              </div>
              <input 
                type="range" 
                min="100000" 
                max="10000000" 
                step="100000"
                [ngModel]="burnRate()" 
                (ngModelChange)="burnRate.set(+$event)"
                class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-500"
              >
              <p class="text-xs text-slate-600">Ежемесячный расход денег (ФОТ, сервера, офис, маркетинг).</p>
            </div>

            <!-- Cash Slider -->
            <div class="space-y-4">
               <div class="flex justify-between items-end">
                <label class="text-sm font-mono text-slate-400 uppercase">Cash on Hand</label>
                <span class="text-xl font-bold font-mono text-white">{{ cash() | number }} ₽</span>
              </div>
              <input 
                type="range" 
                min="500000" 
                max="50000000" 
                step="500000"
                [ngModel]="cash()" 
                (ngModelChange)="cash.set(+$event)"
                class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-400"
              >
              <p class="text-xs text-slate-600">Деньги на счетах прямо сейчас.</p>
            </div>

          </div>

          <!-- RESULTS COLUMN (DASHBOARD) -->
          <div class="lg:col-span-5 flex flex-col gap-6">
            
            <!-- Result Box 1: Ratio -->
            <div class="flex-1 bg-black/40 border rounded-xl p-6 flex flex-col justify-center relative overflow-hidden transition-colors duration-500"
                 [class.border-red-500]="ratioStatus() === 'CRITICAL'"
                 [class.border-amber-500]="ratioStatus() === 'WARNING'"
                 [class.border-emerald-500]="ratioStatus() === 'HEALTHY'"
            >
               <!-- Scanline effect -->
               <div class="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none"></div>
               
               <p class="text-xs font-mono uppercase mb-2" 
                  [class.text-red-400]="ratioStatus() === 'CRITICAL'"
                  [class.text-amber-400]="ratioStatus() === 'WARNING'"
                  [class.text-emerald-400]="ratioStatus() === 'HEALTHY'"
               >LTV / CAC Efficiency</p>
               
               <div class="text-6xl font-black font-tech text-white mb-2">
                 {{ ratio() | number:'1.1-1' }}x
               </div>

               <div class="text-xs font-bold font-mono uppercase tracking-widest px-2 py-1 inline-block rounded w-max"
                 [class.bg-red-900]="ratioStatus() === 'CRITICAL'"
                 [class.text-red-200]="ratioStatus() === 'CRITICAL'"
                 [class.bg-amber-900]="ratioStatus() === 'WARNING'"
                 [class.text-amber-200]="ratioStatus() === 'WARNING'"
                 [class.bg-emerald-900]="ratioStatus() === 'HEALTHY'"
                 [class.text-emerald-200]="ratioStatus() === 'HEALTHY'"
               >
                 Status: {{ ratioStatus() }}
               </div>
            </div>

            <!-- Result Box 2: Runway -->
            <div class="flex-1 bg-black/40 border border-slate-800 rounded-xl p-6 flex flex-col justify-center relative overflow-hidden">
                <p class="text-xs font-mono uppercase text-slate-500 mb-2">Runway (Time to Death)</p>
                <div class="flex items-baseline gap-2">
                   <span class="text-5xl font-black font-tech"
                    [class.text-red-500]="runway() < 6"
                    [class.text-white]="runway() >= 6"
                   >{{ runway() | number:'1.1-1' }}</span>
                   <span class="text-slate-500 font-mono">Months</span>
                </div>
                
                <!-- Progress Bar -->
                <div class="w-full h-1 bg-slate-800 mt-4 rounded-full overflow-hidden">
                   <div class="h-full bg-slate-200 transition-all duration-500" [style.width.%]="(runway() / 24) * 100"></div>
                </div>
            </div>

            <!-- Call to Action based on data -->
            <div class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg text-center">
               @if (ratioStatus() === 'CRITICAL') {
                 <p class="text-xs text-red-300 font-mono mb-2">⚠️ ВАША МОДЕЛЬ НЕ СХОДИТСЯ</p>
                 <button class="w-full py-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors mb-2">
                   Исправить юнит-экономику
                 </button>
               } @else {
                 <p class="text-xs text-emerald-300 font-mono mb-2">✓ МОДЕЛЬ ГОТОВА К МАСШТАБИРОВАНИЮ</p>
                 <button class="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors mb-2">
                   Заказать стратегию роста
                 </button>
               }
               <p class="text-[10px] text-slate-500">
                 Нажимая кнопку, вы принимаете 
                 <a href="#" class="underline hover:text-slate-300 transition-colors">политику конфиденциальности</a>
               </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {
  // Values adapted for Rubles (approximate exchange scale x100 for simplicity and round numbers)
  cac = signal(15000); // 15k rub
  ltv = signal(45000); // 45k rub
  burnRate = signal(2000000); // 2M rub/month
  cash = signal(12000000); // 12M rub runway

  ratio = computed(() => {
    return this.cac() > 0 ? this.ltv() / this.cac() : 0;
  });

  ratioStatus = computed(() => {
    const r = this.ratio();
    if (r < 3) return 'CRITICAL'; // Investors need > 3x
    if (r < 5) return 'WARNING';  // Good, but can be better
    return 'HEALTHY';             // Excellent
  });

  runway = computed(() => {
    return this.burnRate() > 0 ? this.cash() / this.burnRate() : 0;
  });
}