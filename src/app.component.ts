import { Component, ChangeDetectionStrategy, signal, HostListener } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { PhilosophyComponent } from './components/philosophy.component';
import { MethodologyComponent } from './components/methodology.component';
import { LifecycleComponent } from './components/lifecycle.component';
import { TrendsComponent } from './components/trends.component';
import { CalculatorComponent } from './components/calculator.component';
import { MetricsComponent } from './components/metrics.component';
import { FaqComponent } from './components/faq.component';
import { AuthorComponent } from './components/author.component';
import { GuaranteeComponent } from './components/guarantee.component';
import { PricingComponent } from './components/pricing.component';
import { TerminalComponent } from './components/terminal.component';
import { ScopingComponent } from './components/scoping.component';
import { ArtifactsComponent } from './components/artifacts.component';
import { BootloaderComponent } from './components/bootloader.component';
import { TickerComponent } from './components/ticker.component';
import { JoinComponent } from './components/join.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    PhilosophyComponent,
    MethodologyComponent,
    LifecycleComponent,
    TrendsComponent,
    CalculatorComponent,
    MetricsComponent,
    FaqComponent,
    AuthorComponent,
    GuaranteeComponent,
    PricingComponent,
    TerminalComponent,
    ScopingComponent,
    ArtifactsComponent,
    BootloaderComponent,
    TickerComponent,
    JoinComponent
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  isBooted = signal(false);
  showGrid = signal(false);

  onBootComplete() {
    this.isBooted.set(true);
  }

  // Toggle grid with 'G' key
  @HostListener('window:keydown.g', ['$event'])
  toggleGrid(event: KeyboardEvent) {
    this.showGrid.update(v => !v);
  }
}