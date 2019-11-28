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

// CV
import { ResumeComponent } from './rout/resume/resume.component';
import { AnimationComponent } from './rout/resume/animation/animation.component';
import { SculptingComponent } from './rout/resume/sculpting/sculpting.component';
import { TexturingComponent } from './rout/resume/texturing/texturing.component';
import { ScriptingComponent } from './rout/resume/scripting/scripting.component';

import { LogoComponent } from './rout/resume/logo/logo.component';
import { PosterComponent } from './rout/resume/poster/poster.component';


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
    path: 'cv',
    component: ResumeComponent,
    children: [
        {
            path: '',
            redirectTo: 'sculpting',
            pathMatch: 'full'
        },
        {
            path: 'sculpting',
            component: SculptingComponent
        },
        // tempname?
        {
            path: 'animation',
            component: AnimationComponent
        },
        {
            path: 'art',
            component: TexturingComponent
        },
        // TEST
        {
            path: 'coding',
            component: ScriptingComponent
        }
        // tempname?
    ]
  },
// ^ resumes ^
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
