import { Component, ChangeDetectionStrategy, ElementRef, ViewChild, afterNextRender, signal, effect, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';

type ScenarioType = 'bootstrapped' | 'vc' | 'xfulcrum';

interface ChartData {
  month: number;
  revenue: number;
  cost: number;
}

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 px-4 sm:px-6 bg-slate-900/30 border-y border-slate-900 relative overflow-hidden">
      
      <!-- Ambient light for section -->
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-6xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 font-tech uppercase">
            Simulation <span class="text-indigo-500">Core</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mx-auto">
            Разные стратегии дают разную траекторию. Выберите сценарий, чтобы увидеть прогноз P&L (Profit & Loss) на 12 месяцев.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Text / Controls Column -->
          <div class="lg:col-span-4 space-y-6">
            
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-1">
              <div class="grid grid-cols-1 gap-1">
                <button 
                  (click)="setScenario('bootstrapped')"
                  class="px-4 py-3 text-left rounded-lg transition-all border border-transparent relative overflow-hidden group"
                  [class.bg-slate-800]="scenario() === 'bootstrapped'"
                  [class.border-slate-700]="scenario() === 'bootstrapped'"
                >
                  <div class="flex items-center justify-between mb-1 relative z-10">
                    <span class="font-bold text-white font-tech uppercase tracking-wider">Scenario A: Bootstrap</span>
                    <span class="w-2 h-2 rounded-full bg-slate-500" [class.bg-slate-200]="scenario() === 'bootstrapped'"></span>
                  </div>
                  <p class="text-xs text-slate-400 relative z-10">Органический рост. Низкий риск, низкая скорость. Долгая "Долина смерти".</p>
                </button>

                <button 
                  (click)="setScenario('vc')"
                  class="px-4 py-3 text-left rounded-lg transition-all border border-transparent relative overflow-hidden group"
                  [class.bg-slate-800]="scenario() === 'vc'"
                  [class.border-slate-700]="scenario() === 'vc'"
                >
                  <div class="flex items-center justify-between mb-1 relative z-10">
                     <span class="font-bold text-white font-tech uppercase tracking-wider">Scenario B: Aggressive VC</span>
                     <span class="w-2 h-2 rounded-full bg-red-500" [class.bg-red-400]="scenario() === 'vc'"></span>
                  </div>
                  <p class="text-xs text-slate-400 relative z-10">Высокий Burn Rate. Рост выручки есть, но прибыль отрицательная (Cash Gap).</p>
                </button>

                <button 
                  (click)="setScenario('xfulcrum')"
                  class="px-4 py-3 text-left rounded-lg transition-all border border-transparent relative overflow-hidden group"
                  [class.bg-slate-800]="scenario() === 'xfulcrum'"
                  [class.border-emerald-500]="scenario() === 'xfulcrum'"
                  [class.bg-emerald-950]="scenario() === 'xfulcrum'"
                >
                  <div class="flex items-center justify-between mb-1 relative z-10">
                     <span class="font-bold text-white font-tech uppercase tracking-wider">Scenario C: xFulcrum</span>
                     <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <p class="text-xs text-slate-400 relative z-10">Оптимизация Unit-экономики до масштабирования. Быстрый выход в Break-even.</p>
                  
                  <!-- Shine effect for active -->
                  @if(scenario() === 'xfulcrum') {
                     <div class="absolute inset-0 bg-emerald-500/10 pointer-events-none"></div>
                  }
                </button>
              </div>
            </div>

            <!-- Dynamic Stats Box -->
            <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
               <h4 class="text-xs font-mono text-slate-500 uppercase mb-4">Projected Year 1 Outcome</h4>
               <div class="space-y-4">
                  <div class="flex justify-between items-end border-b border-slate-800 pb-2">
                     <span class="text-sm text-slate-300">Total Burn</span>
                     <span class="font-mono font-bold text-red-400">{{ currentStats().burn | number }} ₽</span>
                  </div>
                  <div class="flex justify-between items-end border-b border-slate-800 pb-2">
                     <span class="text-sm text-slate-300">Total Revenue</span>
                     <span class="font-mono font-bold text-emerald-400">{{ currentStats().revenue | number }} ₽</span>
                  </div>
                  <div class="flex justify-between items-center pt-2">
                     <span class="text-sm text-slate-300">Break-even</span>
                     <span class="px-2 py-1 rounded text-xs font-bold uppercase tracking-wider"
                        [class.bg-slate-800]="scenario() === 'bootstrapped'"
                        [class.text-slate-400]="scenario() === 'bootstrapped'"
                        [class.bg-red-950]="scenario() === 'vc'"
                        [class.text-red-400]="scenario() === 'vc'"
                        [class.bg-emerald-950]="scenario() === 'xfulcrum'"
                        [class.text-emerald-400]="scenario() === 'xfulcrum'"
                     >
                       {{ currentStats().breakeven }}
                     </span>
                  </div>
               </div>
            </div>

          </div>

          <!-- D3 Chart Container -->
          <div class="lg:col-span-8 h-[400px] bg-slate-950 rounded-xl border border-slate-800 shadow-2xl relative group overflow-hidden">
            
            <!-- Grid Background -->
            <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            <!-- Chart Header -->
            <div class="absolute top-4 left-6 z-10 flex gap-4">
               <div class="flex items-center gap-2">
                  <div class="w-3 h-1 bg-emerald-500"></div>
                  <span class="text-xs font-mono text-emerald-500">Revenue</span>
               </div>
               <div class="flex items-center gap-2">
                  <div class="w-3 h-1 bg-red-500"></div>
                  <span class="text-xs font-mono text-red-500">Burn Rate</span>
               </div>
            </div>

            <!-- The Chart -->
            <div #chartContainer class="w-full h-full relative z-0"></div>

            <!-- Scanning Line Effect -->
            <div class="absolute top-0 bottom-0 w-[1px] bg-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.5)] pointer-events-none animate-[scan_4s_ease-in-out_infinite] z-10 hidden sm:block"></div>
            
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes scan {
      0% { left: 0%; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { left: 100%; opacity: 0; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetricsComponent implements OnDestroy {
  @ViewChild('chartContainer') chartContainer!: ElementRef<HTMLElement>;
  
  scenario = signal<ScenarioType>('xfulcrum');
  
  currentStats = signal({
    burn: 0,
    revenue: 0,
    breakeven: 'Month 6'
  });

  private resizeObserver: ResizeObserver | null = null;
  private svg: any;
  private width = 0;
  private height = 0;
  private margin = { top: 40, right: 30, bottom: 30, left: 50 };
  
  // Data Generators
  private scenarios: Record<ScenarioType, ChartData[]> = {
    bootstrapped: Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      revenue: (i * i) * 1000 + 5000, // Slow quadratic
      cost: 15000 + (i * 1000) // Low static cost
    })),
    vc: Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      revenue: (i * i * 1.5) * 1000, // Moderate growth
      cost: 100000 + (i * 20000) // Huge growing burn
    })),
    xfulcrum: Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      revenue: Math.pow(i, 3.2) * 200 + 10000, // Exponential
      cost: 50000 + (i * 5000) // Optimized cost
    }))
  };

  private statsData: Record<ScenarioType, any> = {
    bootstrapped: { burn: 250000, revenue: 650000, breakeven: 'Month 4' },
    vc: { burn: 2500000, revenue: 1200000, breakeven: 'NEVER (Cash Gap)' },
    xfulcrum: { burn: 900000, revenue: 3500000, breakeven: 'Month 5' }
  };

  constructor() {
    afterNextRender(() => {
      this.initChart();
      this.setupResizeObserver();
    });

    effect(() => {
      const s = this.scenario();
      this.currentStats.set(this.statsData[s]);
      this.updateChart(s);
    });
  }

  setScenario(s: ScenarioType) {
    this.scenario.set(s);
  }

  private initChart() {
    if (!this.chartContainer) return;
    const el = this.chartContainer.nativeElement;
    
    // Cleanup
    d3.select(el).selectAll('*').remove();

    this.width = el.clientWidth - this.margin.left - this.margin.right;
    this.height = el.clientHeight - this.margin.top - this.margin.bottom;

    this.svg = d3.select(el)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${el.clientWidth} ${el.clientHeight}`)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

    // Add Axes Groups
    this.svg.append('g').attr('class', 'x-axis').attr('transform', `translate(0,${this.height})`);
    this.svg.append('g').attr('class', 'y-axis');

    // Add Paths
    this.svg.append('path').attr('class', 'line-revenue').attr('fill', 'none').attr('stroke-width', 3);
    this.svg.append('path').attr('class', 'line-cost').attr('fill', 'none').attr('stroke-width', 2).attr('stroke-dasharray', '5,5');
    
    // Add Area
    this.svg.append('path').attr('class', 'area-revenue').style('opacity', 0.15);

    // Initial render
    this.updateChart(this.scenario());
  }

  private updateChart(type: ScenarioType) {
    if (!this.svg) return;

    const data = this.scenarios[type];
    const duration = 750;

    // Scales
    const x = d3.scaleLinear()
      .domain([1, 12])
      .range([0, this.width]);

    const maxVal = d3.max(data, d => Math.max(d.revenue, d.cost)) || 0;
    const y = d3.scaleLinear()
      .domain([0, maxVal * 1.1]) // +10% padding
      .range([this.height, 0]);

    // Update Axes
    this.svg.select('.x-axis')
      .transition().duration(duration)
      .call(d3.axisBottom(x).ticks(12).tickFormat(d => `M${d}`))
      .attr('font-family', 'monospace')
      .attr('color', '#64748b');

    this.svg.select('.y-axis')
      .transition().duration(duration)
      .call(d3.axisLeft(y).ticks(5).tickFormat(d => `${+d / 1000}k`))
      .attr('font-family', 'monospace')
      .attr('color', '#64748b')
      .call(g => g.select(".domain").remove()) // remove axis line
      .call(g => g.selectAll(".tick line").attr("stroke-opacity", 0.1).attr("x2", this.width)); // grid lines

    // Line Generators
    const lineRevenue = d3.line<ChartData>()
      .x(d => x(d.month))
      .y(d => y(d.revenue))
      .curve(d3.curveMonotoneX);

    const lineCost = d3.line<ChartData>()
      .x(d => x(d.month))
      .y(d => y(d.cost))
      .curve(d3.curveMonotoneX);

    const areaRevenue = d3.area<ChartData>()
      .x(d => x(d.month))
      .y0(this.height)
      .y1(d => y(d.revenue))
      .curve(d3.curveMonotoneX);

    // Update Paths with Transition
    this.svg.select('.line-revenue')
      .datum(data)
      .transition().duration(duration)
      .attr('d', lineRevenue)
      .attr('stroke', '#10b981'); // emerald-500

    this.svg.select('.line-cost')
      .datum(data)
      .transition().duration(duration)
      .attr('d', lineCost)
      .attr('stroke', '#ef4444'); // red-500

    this.svg.select('.area-revenue')
      .datum(data)
      .transition().duration(duration)
      .attr('d', areaRevenue)
      .attr('fill', '#10b981');
      
    // Add interactive dots
    const dots = this.svg.selectAll('.dot')
      .data(data);
      
    dots.enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('r', 0)
      .merge(dots as any)
      .transition().duration(duration)
      .attr('cx', (d: ChartData) => x(d.month))
      .attr('cy', (d: ChartData) => y(d.revenue))
      .attr('r', 4)
      .attr('fill', '#020617')
      .attr('stroke', '#10b981')
      .attr('stroke-width', 2);
      
    dots.exit().remove();
  }

  private setupResizeObserver() {
    if (!this.chartContainer) return;
    this.resizeObserver = new ResizeObserver(() => {
      this.initChart(); // Re-init on resize
    });
    this.resizeObserver.observe(this.chartContainer.nativeElement);
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
