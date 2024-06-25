import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
   selector: 'app-frm-control-flow',
   standalone: true,
   imports: [
      TitleComponent,
   ],
   templateUrl: './frm-control-flow.component.html',
   styleUrl: './frm-control-flow.component.css'
})
export class FrmControlFlowComponent {

   public showContent = signal<boolean>(false);
   public grade = signal<Grade>('A');
   public framworks = signal(['Angular', 'React', 'Vue', 'Svelte', 'Quik']);
   public framworks2 = signal([]);

   public toggleContent() {
      this.showContent.update(valor => !valor);
   }

   public setGrado(cal: Grade): void {

      this.grade.update(valor => valor = cal);

   }

}
