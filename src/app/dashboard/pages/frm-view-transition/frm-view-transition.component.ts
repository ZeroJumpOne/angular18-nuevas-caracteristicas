import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
   selector: 'app-frm-view-transition',
   standalone: true,
   imports: [
      TitleComponent,
   ],
   templateUrl: './frm-view-transition.component.html',
   styleUrl: './frm-view-transition.component.css'
})
export class FrmViewTransitionComponent {

}
