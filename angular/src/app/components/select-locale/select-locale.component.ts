import { Component, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-locale',
  standalone: true,
  imports: [],
  templateUrl: './select-locale.component.html',
  styleUrl: './select-locale.component.scss'
})
export class SelectLocaleComponent {
  public readonly langs = [
    { locale: 'en', title: 'English' },
    { locale: 'de', title: 'Deutsch' },
    { locale: 'fr', title: 'Français' }
  ]

  public readonly currentLocale = signal('en')

  constructor(private readonly translate: TranslateService) {

  }

  public setLocale(locale: string) {
    this.translate.use(locale)
    this.currentLocale.set(locale)
  }
}
