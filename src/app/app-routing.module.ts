import { LandingPageComponent } from './landing-page/landing-page.component'; // <-- import at top
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroPageComponent } from './hero-page/hero-page.component'; // <-- import at top


const routes: Routes = [
   {
      path: '**', 
      component: LandingPageComponent,
    },
    {
      path:'hero',
      component: HeroPageComponent 
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
