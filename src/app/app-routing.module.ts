import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { BoardComponent } from './pages/board/board.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MenuComponent
  },
  {
    path: 'board',
    pathMatch: 'full',
    component: BoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
