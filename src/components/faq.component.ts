import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  template: `
    <section class="py-24 px-4 sm:px-6 border-t border-slate-900 bg-slate-950">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-white mb-12 font-tech uppercase text-center">
          System Protocols // <span class="text-slate-500">FAQ</span>
        </h2>

        <div class="space-y-4">
          
          @for (item of items; track item.q) {
            <div class="border border-slate-800 rounded-lg bg-[#050914] overflow-hidden">
              <button 
                (click)="toggle(item)"
                class="w-full flex items-center justify-between p-6 text-left hover:bg-slate-900 transition-colors group"
              >
                <span class="font-mono text-sm sm:text-base text-slate-200 group-hover:text-amber-400 transition-colors">
                  <span class="text-slate-600 mr-2">>>></span> {{ item.q }}
                </span>
                <span class="text-slate-500 text-xl transform transition-transform duration-300" [class.rotate-45]="item.isOpen()">+</span>
              </button>
              
              @if (item.isOpen()) {
                <div class="px-6 pb-6 pt-0 text-slate-400 text-sm leading-relaxed font-light border-t border-slate-800/50 mt-2 pt-4">
                  {{ item.a }}
                </div>
              }
            </div>
          }

        </div>
        
        <div class="mt-12 text-center">
             <p class="text-slate-500 text-sm mb-4">Нужен кастомный сценарий?</p>
             <a href="#" class="text-amber-500 hover:text-amber-400 border-b border-amber-500/30 hover:border-amber-400 pb-1 transition-colors">Обсудить защиту проекта в Telegram</a>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  items = [
    {
      q: 'Зачем мне TAM/SAM/SOM? У меня уникальный продукт.',
      a: 'Инвестор не вкладывает в "уникальность", он покупает долю рынка. Если вы не можете обосновать объем рынка цифрами (снизу-вверх), вы не пройдете первичный скрининг. Мы считаем эти показатели так, чтобы они выдержали критику аналитиков фонда.',
      isOpen: signal(false)
    },
    {
      q: 'MVP на Tilda (Zero-Block)? Это серьезно для B2B?',
      a: 'Абсолютно. Инвесторы наказывают за "долгострой", а не за ноу-код. Мы собираем визуально безупречный MVP за 2 недели, чтобы вы показали Traction (первые продажи). Писать код до подтверждения спроса — это сжигание денег.',
      isOpen: signal(false)
    },
    {
      q: 'Что входит в P&L и финансовую модель?',
      a: 'Это не просто Excel-табличка. Это сценарное моделирование: как изменится ваша прибыль при росте цены лида (CAC) или падении Retention. Мы готовим Unit-экономику, которая показывает инвестору четкий путь к Break-even point (точке безубыточности).',
      isOpen: signal(false)
    },
    {
      q: 'Вы гарантируете привлечение инвестиций?',
      a: 'Никто не может гарантировать решение инвест-комитета (это уголовно наказуемо). Но мы гарантируем, что ваш Data Room (пакет документов) будет соответствовать стандартам Due Diligence. Вас не развернут из-за "кривой презентации" или "отсутствия расчетов".',
      isOpen: signal(false)
    }
  ];

  toggle(item: any) {
    item.isOpen.set(!item.isOpen());
  }
}