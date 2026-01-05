import { Component, ChangeDetectionStrategy, signal, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bootloader',
  imports: [CommonModule],
  template: `
    <div class="fixed inset-0 z-[100] bg-[#02040a] flex flex-col items-center justify-center font-mono text-xs sm:text-sm text-slate-400 p-4 cursor-wait"
         *ngIf="isVisible()">
      
      <div class="max-w-md w-full space-y-2">
        <!-- Logo Glitch -->
        <div class="mb-8 text-center">
           <span class="text-2xl font-bold font-tech text-white tracking-widest uppercase animate-pulse">
             xFulcrum <span class="text-amber-500">OS</span>
           </span>
           <div class="h-px w-full bg-slate-800 mt-2"></div>
        </div>

        <!-- Logs -->
        <div class="h-48 overflow-hidden flex flex-col justify-end">
          @for (log of logs(); track log) {
            <div class="flex gap-3">
              <span class="text-slate-600">[{{ log.time }}]</span>
              <span [class.text-amber-500]="log.type === 'warn'"
                    [class.text-emerald-500]="log.type === 'success'"
                    [class.text-slate-300]="log.type === 'info'"
              >> {{ log.msg }}</span>
            </div>
          }
        </div>

        <!-- Progress Bar -->
        <div class="mt-4 space-y-1">
           <div class="flex justify-between text-[10px] uppercase tracking-wider text-slate-500">
              <span>Loading Modules</span>
              <span>{{ progress() }}%</span>
           </div>
           <div class="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-amber-500 transition-all duration-100 ease-linear" [style.width.%]="progress()"></div>
           </div>
        </div>
      </div>

    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BootloaderComponent implements OnInit {
  complete = output<void>();
  isVisible = signal(true);
  progress = signal(0);
  logs = signal<{time: string, msg: string, type: 'info'|'warn'|'success'}[]>([]);

  private logMessages = [
    { msg: 'BIOS CHECK... OK', type: 'info' },
    { msg: 'ALLOCATING MEMORY...', type: 'info' },
    { msg: 'MOUNTING FILE SYSTEM...', type: 'info' },
    { msg: 'DETECTING USER REGION...', type: 'warn' },
    { msg: 'LOADING ASSETS...', type: 'info' },
    { msg: 'CONNECTING TO MARKET STREAM...', type: 'info' },
    { msg: 'VALIDATING SECURITY CERTIFICATES...', type: 'success' },
    { msg: 'SYSTEM READY.', type: 'success' }
  ];

  ngOnInit() {
    this.runSequence();
  }

  private runSequence() {
    let step = 0;
    const totalSteps = this.logMessages.length;
    
    // Progress Bar Loop
    const progressInterval = setInterval(() => {
      this.progress.update(p => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return p + Math.floor(Math.random() * 5) + 1;
      });
    }, 50);

    // Logs Loop
    const logInterval = setInterval(() => {
      if (step >= totalSteps) {
        clearInterval(logInterval);
        setTimeout(() => this.finish(), 500);
        return;
      }

      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}.${now.getMilliseconds().toString().padStart(3,'0').slice(0,2)}`;
      
      // Type casting safely
      const currentMsg = this.logMessages[step];
      const type = currentMsg.type as 'info'|'warn'|'success';

      this.logs.update(prev => [...prev.slice(-6), {
        time: timeStr,
        msg: currentMsg.msg,
        type: type
      }]);
      
      step++;
    }, 250);
  }

  private finish() {
    this.isVisible.set(false);
    this.complete.emit();
  }
}
