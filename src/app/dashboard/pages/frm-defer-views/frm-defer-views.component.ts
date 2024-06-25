import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders-slow/heavy-loaders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
   selector: 'app-frm-defer-views',
   standalone: true,
   imports: [
      HeavyLoadersSlowComponent,
      TitleComponent,
   ],
   templateUrl: './frm-defer-views.component.html',
   styleUrl: './frm-defer-views.component.css'
})
export class FrmDeferViewsComponent {

}
