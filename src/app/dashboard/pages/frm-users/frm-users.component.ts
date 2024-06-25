import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
   selector: 'app-frm-users',
   standalone: true,
   imports: [
      TitleComponent,
      RouterModule,
   ],
   templateUrl: './frm-users.component.html',
   styleUrl: './frm-users.component.css'
})
export class FrmUsersComponent {

   public usersService = inject(UsersService);

   constructor() {

   }

}
