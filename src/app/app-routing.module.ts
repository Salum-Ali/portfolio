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
// 3D Work
import { ScriptingComponent } from './rout/resume/scripting/scripting.component';
// Animation
import { AnimationComponent } from './rout/resume/animation/animation.component';
// Texturing
import { TexturingComponent } from './rout/resume/texturing/texturing.component';
// Scripting
import { SculptingComponent } from './rout/resume/sculpting/sculpting.component';
// Personal Portfolio
import { PersonalComponent } from './rout/resume/personal/personal.component';


// Contact
import { ContactComponent } from './rout/contact/contact.component';
import { SocialComponent } from './rout/contact/social/social.component';
import { CommmissionComponent } from './rout/contact/commmission/commmission.component';
import { ConnectComponent } from './rout/contact/connect/connect.component';

// Ignore For Now
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
  // ^ HomePage Stuff ^
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
    path: 'portfolio',
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
      // ^ 3D Modelling & Sculpting ^
      {
          path: 'animation',
          component: AnimationComponent
      },
      // ^ Animations ^
      {
          path: 'art',
          component: TexturingComponent
      },
      // ^ 2D Arts inc. Logos ^
      {
          path: 'coding',
          component: ScriptingComponent
      },
      // ^ Anything Programming Related ^
      {
        path: 'personal',
        component: PersonalComponent
      }
    ]
  },
  // ^ CV's ^
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      {
          path: '',
          redirectTo: 'me',
          pathMatch: 'full'
      },
      {
          path: 'me',
          component: ConnectComponent
      },
      // ^ Contact Me ^
      {
        path: 'socials',
        component: SocialComponent
      },
      // ^ Contact Me ^
      {
          path: 'commissions',
          component: CommmissionComponent
      }
      // ^ Commision Registration Page ^
    ]
  },
  {
    path: '**',
    component: NoneComponent
  }
  // ^ 404 ^
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
