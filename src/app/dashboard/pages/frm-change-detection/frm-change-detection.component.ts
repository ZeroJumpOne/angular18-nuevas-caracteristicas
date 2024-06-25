import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
   selector: 'app-frm-change-detection',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [
      CommonModule,
      TitleComponent
   ],
   templateUrl: './frm-change-detection.component.html',
   styleUrl: './frm-change-detection.component.css'
})
export class FrmChangeDetectionComponent {

   public currentFramework = computed( () => `Change detection - ${ this.frameworkAsSignal().name }`);

   public frameworkAsSignal = signal({
      name: 'Angular',
      releaseDate: 2016
   });

   public frameworkAsProperty = {
      name: 'Angular',
      releaseDate: 2016
   };

   constructor() {
      setTimeout( () => {

         // this.frameworkAsProperty.name = 'React';

         this.frameworkAsSignal.update( valor => ({...valor, name: 'React'}));


         console.log('Done');

      }, 3000);
   }

}
