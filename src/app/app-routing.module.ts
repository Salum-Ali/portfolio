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

// Project Compendium
import { BackgroundComponent } from './rout/resume/compendium/background/background.component';
import { JamComponent } from './rout/resume/compendium/jam/jam.component';
import { LogoComponent } from './rout/resume/compendium/logo/logo.component';
import { PosterComponent } from './rout/resume/compendium/poster/poster.component';
import { TextureComponent } from './rout/resume/compendium/texture/texture.component';
import { GameComponent } from './rout/resume/compendium/game/game.component';


// Completed Projects
import { CompleteComponent } from './rout/resume/complete/complete.component';
// WIP
import { CurrentComponent } from './rout/resume/current/current.component';
// Archived Projects
import { ChronicleComponent } from './rout/resume/chronicle/chronicle.component';

// Personal Portfolio
import { PersonalComponent } from './rout/resume/personal/personal.component';
import { HindsightComponent } from './rout/resume/personal/hindsight/hindsight.component';
import { FortComponent } from './rout/resume/personal/fort/fort.component';
import { E8Component } from './rout/resume/personal/e8/e8.component';

// Professional Portfolio
import { ProfessionalComponent } from './rout/resume/professional/professional.component';
import { ScriptingComponent } from './rout/resume/professional/scripting/scripting.component';
import { AnimationComponent } from './rout/resume/professional/animation/animation.component';
import { TexturingComponent } from './rout/resume/professional/texturing/texturing.component';
import { ModelingComponent } from './rout/resume/professional/modeling/modeling.component';

// Pedagogy Portfolio
import { PedagogyComponent } from './rout/resume/pedagogy/pedagogy.component';

// Contact
import { ContactComponent } from './rout/contact/contact.component';
// import { CommmissionComponent } from './rout/shop/commmission/commmission.component';
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
  // ^ HeadEmpty, NoRoute ^
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Portfolio Homepage'
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
            title: 'About | Salum Muhammed'
          }
      },
      {
          path: 'skillz',
          component: SkillzComponent,
          data: {
            title: 'About | Skills and Experiences'
          }
      },
      {
          path: 'site',
          component: SiteComponent,
          data: {
            title: 'About | This Web-App'
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
          redirectTo: 'completed',
          pathMatch: 'full'
      },
      {
        path: 'completed',
        component: CompleteComponent,
        data: {
          title: 'Projects | Completed'
        },
        children: [
          {
            path: '',
            redirectTo: 'backgrounds',
            pathMatch: 'full'
          },
          {
            path: 'backgrounds',
            component: BackgroundComponent,
            data: {
              title: 'Projects | Completed | Background & Environment Art'
            }
          },
          {
            path: 'jams',
            component: JamComponent,
            data: {
              title: 'Projects | Completed | Game Jams'
            }
          },
          {
            path: 'logos',
            component: LogoComponent,
            data: {
              title: 'Projects | Completed | Logo Design'
            }
          },
          {
            path: 'games',
            component: GameComponent,
            data: {
              title: 'Projects | Completed | Personl Game Projects'
            }
          },
          {
            path: 'posters',
            component: PosterComponent,
            data: {
              title: 'Project | Completed | Posters'
            }
          },
          {
            path: 'textures',
            component: TextureComponent,
            data: {
              title: 'Project | Completed | Textures'
            }
          }
        ]
      },
      // ^ Completed Works ^
      {
        path: 'ongoing',
        component: CurrentComponent,
        data: {
          title: 'Projects | Ongoing'
        },
        children: [
          {
            path: '',
            redirectTo: 'backgrounds',
            pathMatch: 'full'
          },
          {
            path: 'backgrounds',
            component: BackgroundComponent,
            data: {
              title: 'Projects | Completed | Background & Environment Art'
            }
          },
          {
            path: 'jams',
            component: JamComponent,
            data: {
              title: 'Projects | Completed | Game Jams'
            }
          },
          {
            path: 'logos',
            component: LogoComponent,
            data: {
              title: 'Projects | Completed | Logo Design'
            }
          },
          {
            path: 'games',
            component: GameComponent,
            data: {
              title: 'Projects | Completed | Personl Game Projects'
            }
          },
          {
            path: 'posters',
            component: PosterComponent,
            data: {
              title: 'Project | Completed | Posters'
            }
          },
          {
            path: 'textures',
            component: TextureComponent,
            data: {
              title: 'Project | Completed | Textures'
            }
          }
        ]
      },
      {
        path: 'archived',
        component: ChronicleComponent,
        data: {
          title: 'Projects | Archived'
        },
        children: [
          {
            path: '',
            redirectTo: 'backgrounds',
            pathMatch: 'full'
          },
          {
            path: 'backgrounds',
            component: BackgroundComponent,
            data: {
              title: 'Projects | Completed | Background & Environment Art'
            }
          },
          {
            path: 'jams',
            component: JamComponent,
            data: {
              title: 'Projects | Completed | Game Jams'
            }
          },
          {
            path: 'logos',
            component: LogoComponent,
            data: {
              title: 'Projects | Completed | Logo Design'
            }
          },
          {
            path: 'games',
            component: GameComponent,
            data: {
              title: 'Projects | Completed | Personl Game Projects'
            }
          },
          {
            path: 'posters',
            component: PosterComponent,
            data: {
              title: 'Project | Completed | Posters'
            }
          },
          {
            path: 'textures',
            component: TextureComponent,
            data: {
              title: 'Project | Completed | Textures'
            }
          }
        ]
      },
      // {
      //   path: 'professional',
      //   component: ProfessionalComponent,
      //   children: [
      //   {
      //     path: '',
      //     redirectTo: 'modeling',
      //     pathMatch: 'full'
      //   },
      //     {
      //       path: 'modeling',
      //       component: ModelingComponent,
      //       data: {
      //         title: 'Professional Works | 3D Modeling '
      //       }
      //     },
      //     // ^ 3D Modelling & Sculpting ^
      //     {
      //       path: 'animation',
      //       component: AnimationComponent,
      //       data: {
      //         title: 'Professional Works | Animation'
      //       }
      //     },
      //     // ^ Animations ^
      //     {
      //       path: 'art',
      //       component: TexturingComponent,
      //       data: {
      //         title: 'Professional Works | 2D Arts'
      //       }
      //     },
      //     // ^ 2D Arts inc. Logos ^
      //     {
      //       path: 'coding',
      //       component: ScriptingComponent,
      //       data: {
      //         title: 'Professional Works | Programming'
      //       }
      //     },
      //     // ^ Anything Programming Related ^
      //   ]
      // },
      // ^ Professional Works ^
      {
        path: 'personal',
        component: PersonalComponent,
        data: {
          title: 'Projects - Personal'
        }
        // children: [
        // {
        //   path: '',
        //   redirectTo: 'jams',
        //   pathMatch: 'full'
        // },
        //   {
        //     path: 'jams',
        //     component: JamComponent,
        //     data: {
        //       title: 'Personal Bests - Game Jams'
        //     }
        //   },
        //   // ^ Game and Other Jams ^
        //   {
        //     path: 'hindsight',
        //     component: HindsightComponent,
        //     data: {
        //       title: 'Personal Bests - Project: HindSight'
        //     }
        //   },
        //   // ^ Project HindSight - 2020 ^
        //   {
        //     path: 'fourty-art-hour-weekends',
        //     component: FortComponent,
        //     data: {
        //       title: 'Personal Bests - FAWH'
        //     }
        //   },
        //   // ^ Fourty-Art-Hour Weekends - 2019 ^
        //   {
        //     path: 'environment-eight',
        //     component: E8Component,
        //     data: {
        //       title: 'Personal Bests - Environment Eight'
        //     }
        //   },
        //   // ^ Environment Eight - May->December 2018 ^
        // ]
      },
      // ^ Personal Bestss ^
      {
        path: 'pedagogy',
        component: PedagogyComponent,
        data: {
          title: 'Projects | Eductational'
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
            title: 'Contact | Details'
          }
      },
      // ^ Contact Me ^
      {
          path: 'questions',
          component: QuestionComponent,
          data: {
            title: 'Contact | Q&A'
          }
      },
      // ^ Contact Me ^
      {
          path: 'feedback',
          component: CommentComponent,
          data: {
            title: 'Contact | Feedback'
          }
      }
      // ^ Commision Registration Page ^
    ]
  },
  {
    path: 'logs',
    component: LogComponent,
    data: {
      title: 'Logs'
    }
  },
  // ^ B/V/Other -Logs ^
  {
    path:  '**',
    redirectTo:  '404',
    pathMatch:  'full'
  },
  {
    path: '404',
    component: NoneComponent,
    data: {
      title: '404 | Page Not Found'
    }
  }
  // ^ 404 ^
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
