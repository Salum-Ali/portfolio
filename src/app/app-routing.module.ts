import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages

// Main
import { HomeComponent } from './rout/home/home.component';
import { NoneComponent } from './rout/none/none.component';

// About
import { AboutComponent } from './rout/about/about.component';
import { SiteComponent } from './rout/about/site/site.component';
import { MeComponent } from './rout/about/me/me.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
},
{
  path:  '',
  redirectTo:  'home',
  pathMatch:  'full'
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
          path: '',
          redirectTo: 'me',
          pathMatch: 'full'
      },
      {
          path: 'me',
          component: MeComponent
      },
      {
          path: 'site',
          component: SiteComponent
      }
    ]
  },
// ^ About ^
  {
    path: '**',
    component: NoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
