import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieImageComponent } from './movie-image/movie-image.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/main', pathMatch: 'full'
  },
  {
    path: 'main', component: MovieComponent
  },
  {
    path: 'details/:idMovie', component: MovieImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
