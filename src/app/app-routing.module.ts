import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GameInfoComponent } from './game-info/game-info.component';
import { BookInfoComponent } from './book-info/book-info.component';

const router: Routes=[
  { path: '', redirectTo: 'game-of-thrones', pathMatch: 'full'},
  { path: 'game-of-thrones', component: GameInfoComponent },
  { path: 'book-details', component: BookInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
    
})
export class AppRoutingModule { }
