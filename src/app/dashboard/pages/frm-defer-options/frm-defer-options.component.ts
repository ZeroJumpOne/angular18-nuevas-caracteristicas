import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders-fast/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
   selector: 'app-frm-defer-options',
   standalone: true,
   imports: [
      HeavyLoadersFastComponent,
      TitleComponent
   ],
   templateUrl: './frm-defer-options.component.html',
   styleUrl: './frm-defer-options.component.css'
})
export class FrmDeferOptionsComponent {

}
