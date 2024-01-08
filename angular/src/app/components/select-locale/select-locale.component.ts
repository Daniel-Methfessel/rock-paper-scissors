import { Component } from '@angular/core';

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
}
