import { Component, inject } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { TitleComponent } from '@shared/title/title.component';
import { OptionsBottomSheetComponent } from './ui/options-bottom-sheet/options-bottom-sheet.component';

@Component({
   selector: 'app-frm-material',
   standalone: true,
   imports: [
      TitleComponent,
      MatSlideToggleModule,
      MatBadgeModule,
      MatIconModule,
      MatButtonModule,
      MatBottomSheetModule,
   ],
   templateUrl: './frm-material.component.html',
   styleUrl: './frm-material.component.css'
})
export class FrmMaterialComponent {

   constructor(private _bottomSheet: MatBottomSheet) {}

   openBottomSheet(): void {
      this._bottomSheet.open(OptionsBottomSheetComponent);
   }

}
