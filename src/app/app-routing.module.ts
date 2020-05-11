import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages

// Main
import { HomeComponent } from './rout/home/home.component';
import { NoneComponent } from './rout/none/none.component';

// About
import { AboutComponent } from './rout/about/about.component';
import { MeComponent } from './rout/about/me/me.component';
import { SkillzComponent } from './rout/about/skillz/skillz.component';
import { SiteComponent } from './rout/about/site/site.component';

// CV
import { ResumeComponent } from './rout/resume/resume.component';

// Personal Portfolio
import { PersonalComponent } from './rout/resume/personal/personal.component';
import { JamComponent } from './rout/resume/personal/jam/jam.component';
import { HindsightComponent } from './rout/resume/personal/hindsight/hindsight.component';
import { FortComponent } from './rout/resume/personal/fort/fort.component';
import { E8Component } from './rout/resume/personal/e8/e8.component';

// Professional Portfolio
import { ProfessionalComponent } from './rout/resume/professional/professional.component';
// 3D Work
import { ScriptingComponent } from './rout/resume/professional/scripting/scripting.component';
// Animation
import { AnimationComponent } from './rout/resume/professional/animation/animation.component';
// Texturing
import { TexturingComponent } from './rout/resume/professional/texturing/texturing.component';
// Scripting
import { ModelingComponent } from './rout/resume/professional/modeling/modeling.component';

// Pedagogy Portfolio
import { PedagogyComponent } from './rout/resume/pedagogy/pedagogy.component';

// Contact
import { ContactComponent } from './rout/contact/contact.component';
import { CommmissionComponent } from './rout/shop/commmission/commmission.component';
import { ConnectComponent } from './rout/contact/connect/connect.component';

// FAQ
import { QuestionComponent } from './rout/contact/question/question.component';

// FeedBack
import { CommentComponent } from './rout/contact/comment/comment.component';

// Logs
import { LogComponent } from './rout/log/log.component';


// Ignore For Now

// To Be Sotred
// import { PosterComponent } from './rout/resume/professional/texturing/poster/poster.component';

const routes: Routes = [
  {
  path:  '',
  redirectTo:  'home',
  pathMatch:  'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
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
          component: MeComponent,
          data: {
            title: 'About - Me'
          }
      },
      {
          path: 'skillz',
          component: SkillzComponent,
          data: {
            title: 'About - Work-Based Skills'
          }
      },
      {
          path: 'site',
          component: SiteComponent,
          data: {
            title: 'About - the Site'
          }
      }
    ]
  },
  // ^ About ^
  {
    path: 'projects',
    component: ResumeComponent,
    children: [
      {
          path: '',
          redirectTo: 'professional',
          pathMatch: 'full'
      },
      {
        path: 'professional',
        component: ProfessionalComponent,
        data: {
          title: 'Projects - Professional'
        },
        children: [
        {
          path: '',
          redirectTo: 'modeling',
          pathMatch: 'full'
        },
          {
            path: 'modeling',
            component: ModelingComponent,
            data: {
              title: 'Professional Works - 3D Modeling '
            }
          },
          // ^ 3D Modelling & Sculpting ^
          {
            path: 'animation',
            component: AnimationComponent,
            data: {
              title: 'Professional Works - Animation'
            }
          },
          // ^ Animations ^
          {
            path: 'art',
            component: TexturingComponent,
            data: {
              title: 'Professional Works - 2D Arts'
            }
          },
          // ^ 2D Arts inc. Logos ^
          {
            path: 'coding',
            component: ScriptingComponent,
            data: {
              title: 'Professional Works - Programming'
            }
          },
          // ^ Anything Programming Related ^
        ]
      },
      // ^ Professional Works ^
      {
        path: 'personal',
        component: PersonalComponent,
        data: {
          title: 'Projects - Personal'
        },
        children: [
        {
          path: '',
          redirectTo: 'jams',
          pathMatch: 'full'
        },
          {
            path: 'jams',
            component: JamComponent,
            data: {
              title: 'Personal Bests - Game Jams'
            }
          },
          // ^ Game and Other Jams ^
          {
            path: 'hindsight',
            component: HindsightComponent,
            data: {
              title: 'Personal Bests - Project: HindSight'
            }
          },
          // ^ Project HindSight - 2020 ^
          {
            path: 'fourty-art-hour-weekends',
            component: FortComponent,
            data: {
              title: 'Personal Bests - FAWH'
            }
          },
          // ^ Fourty-Art-Hour Weekends - 2019 ^
          {
            path: 'environment-eight',
            component: E8Component,
            data: {
              title: 'Personal Bests - Environment Eight'
            }
          },
          // ^ Environment Eight - May->December 2018 ^
        ]
      },
      // ^ Personal Bestss ^
      {
        path: 'pedagogy',
        component: PedagogyComponent,
        data: {
          title: 'Projects - Eductational Projects'
        }
      }
      // ^ Educational Projects ^
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
          component: ConnectComponent,
          data: {
            title: 'Contact - Details'
          }
      },
      // ^ Contact Me ^
      {
          path: 'questions',
          component: QuestionComponent,
          data: {
            title: 'Contact - Details'
          }
      },
      // ^ Contact Me ^
      {
          path: 'comments',
          component: CommentComponent,
          data: {
            title: 'Contact - Commissions'
          }
      }
      // ^ Commision Registration Page ^
    ]
  },
  {
    path: 'faq',
    component: QuestionComponent,
    data: {
      title: 'Q & A'
    }
  },
  {
    path: 'feedback',
    component: CommentComponent,
    data: {
      title: 'Feedback / Queries'
    }
  },
  {
    path: 'logs',
    component: LogComponent,
    data: {
      title: 'Logs'
    }
  },
  // ^ HomePage Stuff ^
  {
    path:  '**',
    redirectTo:  '404',
    pathMatch:  'full'
  },
  {
    path: '404',
    component: NoneComponent,
    data: {
      title: '404 - Page Not Found'
    }
  }
  // ^ 404 ^
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
