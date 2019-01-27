import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { BoardComponent } from './board/board.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [MenuComponent, BoardComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
