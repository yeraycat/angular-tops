import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { MenuComponent } from './components/menu/menu.component';
import { TitleComponent } from './components/title/title.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuComponent, TitleComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    TitleComponent
  ]
})
export class SharedModule { }
