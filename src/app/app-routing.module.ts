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
// Personal Portfolio
import { PersonalComponent } from './rout/resume/personal/personal.component';
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


// Contact
import { ContactComponent } from './rout/contact/contact.component';
import { SocialComponent } from './rout/contact/social/social.component';
import { CommmissionComponent } from './rout/contact/commmission/commmission.component';
import { ConnectComponent } from './rout/contact/connect/connect.component';

// FAQ
import { QuestionComponent } from './rout/question/question.component';

// FeedBack
import { CommentComponent } from './rout/comment/comment.component';

// Ignore For Now
import { LogoComponent } from './rout/resume/logo/logo.component';
import { PosterComponent } from './rout/resume/poster/poster.component';


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
        path: 'profesional',
        component: ProfessionalComponent,
        // data: {
        //   title: 'Projects - Personal'
        // }
        children: [
          {
            path: 'modeling',
            component: ModelingComponent,
            data: {
              title: 'Projects - Modeling '
            }
          },
          // ^ 3D Modelling & Sculpting ^
          {
            path: 'animation',
            component: AnimationComponent,
            data: {
              title: 'Projects - Animation'
            }
          },
          // ^ Animations ^
          {
            path: 'art',
            component: TexturingComponent,
            data: {
              title: 'Projects - Texturing'
            }
          },
          // ^ 2D Arts inc. Logos ^
          {
            path: 'coding',
            component: ScriptingComponent,
            data: {
              title: 'Projects - Programming'
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
        }
      }
      // Personal Bests
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
        path: 'socials',
        component: SocialComponent,
        data: {
          title: 'Contact - Socials'
        }
      },
      // ^ Social Media Link List ^
      {
          path: 'commissions',
          component: CommmissionComponent,
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
