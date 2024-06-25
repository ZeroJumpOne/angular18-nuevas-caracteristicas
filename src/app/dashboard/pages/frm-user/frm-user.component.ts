import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { TitleComponent } from '@shared/title/title.component';
import { switchMap, map } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-frm-user',
  standalone: true,
  imports: [
   TitleComponent,
  ],
  templateUrl: './frm-user.component.html',
  styleUrl: './frm-user.component.css'
})
export class FrmUserComponent {

   private route = inject( ActivatedRoute );
   private usersService = inject( UsersService );

   // public user = signal<User | undefined>( undefined );
   public user = toSignal(
      this.route.params.pipe(
         switchMap( ({ id }) => this.usersService.getUserById( id ) )
      )
   )

   public titleLabel = computed( () => {
      if (!this.user()) return 'Informacion de Usuario';

      return `${ this.user()?.first_name} ${ this.user()?.last_name}`;
   });

   constructor() {
      // console.log( this.route.params);
      // this.route.params.subscribe( params => {
      //    console.log(params);

      // })

   }

}
