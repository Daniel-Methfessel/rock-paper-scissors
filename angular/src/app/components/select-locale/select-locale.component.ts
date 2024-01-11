import { Component, Inject, effect, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';

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

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    private readonly translate: TranslateService,
    @Inject(PLATFORM_ID) platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      const storageKey = 'language'
      effect(() => window.localStorage.setItem(storageKey, this.currentLocale()))
      this.setLocale(window.localStorage.getItem(storageKey)
        ?? navigator.languages.map(l => l.substring(0, 2)).find(l => this.langs.find(o => o.locale == l))
        ?? 'fr')
    }
  }

  public setLocale(locale: string) {
    this.translate.use(locale)
    this.currentLocale.set(locale)
    this.translate.get(_('Rock, paper, scissors'))
      .subscribe(t => this.title.setTitle(t))
    this.translate.get(_('A rock-paper-scissors game against a computer opponent.'))
      .subscribe(t => this.meta.updateTag({ name: 'description', content: t }))
  }
}
