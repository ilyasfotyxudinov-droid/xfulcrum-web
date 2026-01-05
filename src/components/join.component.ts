import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="py-24 px-4 sm:px-6 bg-[#030712] relative overflow-hidden border-t border-slate-900">
      
      <!-- Background: Warm 'Discovery' Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-amber-900/20 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
      
      <!-- Stars / Constellation Effect -->
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div class="max-w-5xl mx-auto relative z-10">
        
        <!-- HEADER SECTION -->
        <div class="text-center mb-16">
           <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900/50 border border-slate-700/50 rounded-full mb-6 backdrop-blur-md shadow-lg">
               <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
               <span class="text-xs font-medium text-slate-300 tracking-wide">Клуб единомышленников</span>
           </div>
           
           <h2 class="text-4xl sm:text-6xl font-bold text-white font-tech uppercase leading-tight mb-6">
             В твоем уравнении <br class="hidden sm:block" />
             <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">не хватает X</span>
           </h2>
           
           <div class="max-w-2xl mx-auto space-y-4 text-lg text-slate-400 font-light leading-relaxed">
             <p>
               Ты умеешь создавать. Ты видишь будущее там, где другие видят пустоту. Но путь инноватора — это уравнение со множеством неизвестных.
             </p>
             <p>
               <strong class="text-white">xFulcrum</strong> — это место, где мы помогаем найти эту неизвестную переменную. Будь то стратегия, инвестиции или просто поддержка тех, кто мыслит так же, как ты. Не строй в одиночку. Давай найдем твой <strong>X</strong> вместе.
             </p>
           </div>
        </div>

        <!-- THE CARD -->
        <div class="bg-[#0b101b]/80 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-5 relative group">
           
           <!-- Decorative Gradient Border -->
           <div class="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none z-20"></div>

           <!-- LEFT: VISUAL CONTEXT (Mobile hidden or minimized) -->
           <div class="lg:col-span-2 bg-[#05080f] p-8 flex flex-col justify-between relative overflow-hidden min-h-[300px] lg:min-h-auto border-b lg:border-b-0 lg:border-r border-slate-800">
              
              <!-- Abstract Graphic: Finding the Connection -->
              <div class="absolute inset-0 opacity-30">
                 <svg width="100%" height="100%" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
                    <circle cx="200" cy="100" r="2" fill="white" class="animate-ping" style="animation-duration: 3s" />
                    <circle cx="150" cy="300" r="2" fill="white" />
                    <circle cx="250" cy="400" r="2" fill="white" />
                    
                    <!-- Lines connecting -->
                    <path d="M200 100 L 150 300 L 250 400" stroke="url(#grad1)" stroke-width="1" fill="none" opacity="0.5" />
                    <defs>
                       <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                         <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:0" />
                         <stop offset="50%" style="stop-color:#fbbf24;stop-opacity:1" />
                         <stop offset="100%" style="stop-color:#fbbf24;stop-opacity:0" />
                       </linearGradient>
                    </defs>
                 </svg>
              </div>

              <div class="relative z-10">
                 <h3 class="text-white font-bold text-xl mb-2">Мы ищем своих.</h3>
                 <p class="text-sm text-slate-500 leading-relaxed">
                   Мы не рекрутеры и не "инфобизнес". Мы инженеры и стратеги, которые строят экосистему для таких же фаундеров.
                 </p>
              </div>

              <div class="relative z-10 mt-8 space-y-4">
                 <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-500 border border-slate-700">
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div>
                       <div class="text-white text-sm font-bold">Нетворкинг</div>
                       <div class="text-xs text-slate-500">Доступ к закрытым чатам</div>
                    </div>
                 </div>
                 <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-500 border border-slate-700">
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div>
                       <div class="text-white text-sm font-bold">Инсайты</div>
                       <div class="text-xs text-slate-500">Реальные кейсы и цифры</div>
                    </div>
                 </div>
              </div>
           </div>

           <!-- RIGHT: THE FORM -->
           <div class="lg:col-span-3 p-8 sm:p-12 relative">
              @if (!isSubmitted()) {
                <div class="mb-8">
                   <h3 class="text-2xl text-white font-bold font-tech uppercase mb-2">Заполни профиль</h3>
                   <p class="text-sm text-slate-400">Расскажи о себе. Без формализма. Нам важно понять, кто ты и чем горишь.</p>
                </div>

                <form (submit)="onSubmit($event)" class="space-y-6">
                   
                   <!-- 0. Name -->
                   <div class="space-y-2">
                      <label class="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        0. Как к тебе обращаться?
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        [(ngModel)]="form.name"
                        required
                        placeholder="Имя или никнейм"
                        class="w-full bg-slate-900/50 border border-slate-700 focus:border-amber-500 text-white px-4 py-3 rounded-lg focus:outline-none transition-all placeholder:text-slate-600 text-sm"
                      >
                   </div>

                   <!-- 1. Education -->
                   <div class="space-y-2">
                      <label class="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        1. Твой бэкграунд (Образование / Опыт)
                      </label>
                      <input 
                        type="text" 
                        name="education"
                        [(ngModel)]="form.education"
                        required
                        placeholder="Какой путь ты прошел? ВУЗ, курсы, самообучение?"
                        class="w-full bg-slate-900/50 border border-slate-700 focus:border-amber-500 text-white px-4 py-3 rounded-lg focus:outline-none transition-all placeholder:text-slate-600 text-sm"
                      >
                   </div>

                   <!-- 2. Skills -->
                   <div class="space-y-2">
                      <label class="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        2. Твои суперсилы (Stack)
                      </label>
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button type="button" (click)="toggleSkill('LLM/AI')" 
                           class="py-2.5 px-4 rounded-lg border text-xs font-medium text-left transition-all flex items-center gap-3"
                           [class.border-amber-500]="hasSkill('LLM/AI')"
                           [class.bg-amber-950/30]="hasSkill('LLM/AI')"
                           [class.text-white]="hasSkill('LLM/AI')"
                           [class.border-slate-700]="!hasSkill('LLM/AI')"
                           [class.bg-slate-900/30]="!hasSkill('LLM/AI')"
                           [class.text-slate-400]="!hasSkill('LLM/AI')"
                        >
                           <div class="w-4 h-4 rounded-sm border flex items-center justify-center transition-colors"
                              [class.border-amber-500]="hasSkill('LLM/AI')"
                              [class.bg-amber-500]="hasSkill('LLM/AI')"
                              [class.border-slate-600]="!hasSkill('LLM/AI')"
                           >
                              <svg *ngIf="hasSkill('LLM/AI')" class="text-black w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4"><polyline points="20 6 9 17 4 12"/></svg>
                           </div>
                           AI / LLM Architect
                        </button>
                        
                        <button type="button" (click)="toggleSkill('High-Code')" 
                           class="py-2.5 px-4 rounded-lg border text-xs font-medium text-left transition-all flex items-center gap-3"
                           [class.border-amber-500]="hasSkill('High-Code')"
                           [class.bg-amber-950/30]="hasSkill('High-Code')"
                           [class.text-white]="hasSkill('High-Code')"
                           [class.border-slate-700]="!hasSkill('High-Code')"
                           [class.bg-slate-900/30]="!hasSkill('High-Code')"
                           [class.text-slate-400]="!hasSkill('High-Code')"
                        >
                           <div class="w-4 h-4 rounded-sm border flex items-center justify-center transition-colors"
                              [class.border-amber-500]="hasSkill('High-Code')"
                              [class.bg-amber-500]="hasSkill('High-Code')"
                              [class.border-slate-600]="!hasSkill('High-Code')"
                           >
                              <svg *ngIf="hasSkill('High-Code')" class="text-black w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4"><polyline points="20 6 9 17 4 12"/></svg>
                           </div>
                           Hardcore Coding
                        </button>

                        <button type="button" (click)="toggleSkill('No-Code')" 
                           class="py-2.5 px-4 rounded-lg border text-xs font-medium text-left transition-all flex items-center gap-3"
                           [class.border-amber-500]="hasSkill('No-Code')"
                           [class.bg-amber-950/30]="hasSkill('No-Code')"
                           [class.text-white]="hasSkill('No-Code')"
                           [class.border-slate-700]="!hasSkill('No-Code')"
                           [class.bg-slate-900/30]="!hasSkill('No-Code')"
                           [class.text-slate-400]="!hasSkill('No-Code')"
                        >
                           <div class="w-4 h-4 rounded-sm border flex items-center justify-center transition-colors"
                              [class.border-amber-500]="hasSkill('No-Code')"
                              [class.bg-amber-500]="hasSkill('No-Code')"
                              [class.border-slate-600]="!hasSkill('No-Code')"
                           >
                              <svg *ngIf="hasSkill('No-Code')" class="text-black w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4"><polyline points="20 6 9 17 4 12"/></svg>
                           </div>
                           No-Code / Tilda
                        </button>

                        <button type="button" (click)="toggleSkill('Design')" 
                           class="py-2.5 px-4 rounded-lg border text-xs font-medium text-left transition-all flex items-center gap-3"
                           [class.border-amber-500]="hasSkill('Design')"
                           [class.bg-amber-950/30]="hasSkill('Design')"
                           [class.text-white]="hasSkill('Design')"
                           [class.border-slate-700]="!hasSkill('Design')"
                           [class.bg-slate-900/30]="!hasSkill('Design')"
                           [class.text-slate-400]="!hasSkill('Design')"
                        >
                           <div class="w-4 h-4 rounded-sm border flex items-center justify-center transition-colors"
                              [class.border-amber-500]="hasSkill('Design')"
                              [class.bg-amber-500]="hasSkill('Design')"
                              [class.border-slate-600]="!hasSkill('Design')"
                           >
                              <svg *ngIf="hasSkill('Design')" class="text-black w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4"><polyline points="20 6 9 17 4 12"/></svg>
                           </div>
                           Product Design
                        </button>

                         <!-- Added Other/Generalist option -->
                        <button type="button" (click)="toggleSkill('Other')" 
                           class="py-2.5 px-4 rounded-lg border text-xs font-medium text-left transition-all flex items-center gap-3 sm:col-span-2"
                           [class.border-amber-500]="hasSkill('Other')"
                           [class.bg-amber-950/30]="hasSkill('Other')"
                           [class.text-white]="hasSkill('Other')"
                           [class.border-slate-700]="!hasSkill('Other')"
                           [class.bg-slate-900/30]="!hasSkill('Other')"
                           [class.text-slate-400]="!hasSkill('Other')"
                        >
                           <div class="w-4 h-4 rounded-sm border flex items-center justify-center transition-colors"
                              [class.border-amber-500]="hasSkill('Other')"
                              [class.bg-amber-500]="hasSkill('Other')"
                              [class.border-slate-600]="!hasSkill('Other')"
                           >
                              <svg *ngIf="hasSkill('Other')" class="text-black w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4"><circle cx="12" cy="12" r="1"/></svg>
                           </div>
                           Другое / Generalist (Умею всего понемногу)
                        </button>
                      </div>
                   </div>

                   <!-- 3. Role & Time -->
                   <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div class="space-y-2">
                         <!-- Updated Label -->
                         <label class="text-xs font-bold text-slate-500 uppercase tracking-wider">
                           Сколько времени готов уделять проекту?
                         </label>
                         <select name="time" [(ngModel)]="form.time" class="w-full bg-slate-900/50 border border-slate-700 focus:border-amber-500 text-white px-4 py-3 rounded-lg text-sm appearance-none outline-none">
                            <option value="" disabled selected>Выбери...</option>
                            <option value="part-time">5-10 часов в неделю (Side Project)</option>
                            <option value="half-time">20 часов в неделю (Part-time)</option>
                            <option value="full-time">40+ часов (Full Focus)</option>
                         </select>
                      </div>
                      <div class="space-y-2">
                         <label class="text-xs font-bold text-slate-500 uppercase tracking-wider">Роль в проекте?</label>
                         <input type="text" name="role" [(ngModel)]="form.role" placeholder="CTO, Product..." class="w-full bg-slate-900/50 border border-slate-700 focus:border-amber-500 text-white px-4 py-3 rounded-lg outline-none text-sm placeholder:text-slate-600">
                      </div>
                   </div>

                   <!-- Contact -->
                   <div class="space-y-2">
                      <label class="text-xs font-bold text-slate-500 uppercase tracking-wider">Твой контакт</label>
                      <input type="text" name="contact" [(ngModel)]="form.contact" required placeholder="Telegram @username" class="w-full bg-slate-900/50 border border-slate-700 focus:border-amber-500 text-white px-4 py-3 rounded-lg outline-none text-sm placeholder:text-slate-600">
                   </div>

                   <button type="submit" [disabled]="!isValid()" class="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm uppercase tracking-widest rounded-lg shadow-lg hover:shadow-amber-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5">
                      Отправить заявку
                   </button>
                </form>
              } @else {
                <div class="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-fade-in p-8">
                   <div class="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                   </div>
                   <h3 class="text-3xl font-bold text-white font-tech uppercase mb-4">Данные приняты!</h3>
                   <p class="text-slate-400 text-lg mb-8 max-w-sm">
                     Спасибо, {{ form.name }}. Мы изучим твою анкету и скоро свяжемся.
                   </p>
                   <div class="p-4 bg-slate-900 rounded-lg border border-slate-800">
                      <p class="text-xs text-slate-500 font-mono">STATUS: <span class="text-emerald-500 font-bold">IN REVIEW</span></p>
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
      animation: fadeIn 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinComponent {
  form = {
    name: '',
    education: '',
    time: '',
    role: '',
    contact: '',
    skills: [] as string[]
  };

  isSubmitted = signal(false);

  toggleSkill(skill: string) {
    const index = this.form.skills.indexOf(skill);
    if (index > -1) {
      this.form.skills.splice(index, 1);
    } else {
      this.form.skills.push(skill);
    }
  }

  hasSkill(skill: string) {
    return this.form.skills.includes(skill);
  }

  isValid() {
    return this.form.name && this.form.education && this.form.time && this.form.role && this.form.contact && this.form.skills.length > 0;
  }

  onSubmit(e: Event) {
    e.preventDefault();
    if (this.isValid()) {
      // Simulate API submission
      setTimeout(() => {
        this.isSubmitted.set(true);
      }, 800);
    }
  }
}