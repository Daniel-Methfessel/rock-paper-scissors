import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { SelectLocaleComponent } from '../../components/select-locale/select-locale.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    TranslateModule,
    SelectLocaleComponent,
    RouterModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public readonly title = _('Rock, paper, scissors');

}
