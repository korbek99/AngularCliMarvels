import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoHeroesComponent } from './listado-heroes/listado-heroes.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';

//const routes: Routes = [];

const routes: Routes = [

  { path: 'listado-heroes', component: ListadoHeroesComponent},
  { path: 'heroe/:id', component: HeroProfileComponent},
  { path: '**', redirectTo: '/listado-heroes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
