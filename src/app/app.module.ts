import { AdsenseModule } from 'ng2-adsense';

import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Pages
import { HomeComponent } from './rout/home/home.component';

import { NoneComponent } from './rout/none/none.component';

import { AboutComponent } from './rout/about/about.component';
import { SiteComponent } from './rout/about/site/site.component';
import { MeComponent } from './rout/about/me/me.component';

import { ProfessionalComponent } from './rout/resume/professional/professional.component';
import { ModelingComponent } from './rout/resume/professional/modeling/modeling.component';
import { PersonalComponent } from './rout/resume/personal/personal.component';
import { AnimationComponent } from './rout/resume/professional/animation/animation.component';
import { SculptingComponent } from './rout/resume/professional/sculpting/sculpting.component';
import { TexturingComponent } from './rout/resume/professional/texturing/texturing.component';
import { LogoComponent } from './rout/resume/logo/logo.component';
import { PosterComponent } from './rout/resume/poster/poster.component';
import { ResumeComponent } from './rout/resume/resume.component';
import { CodeComponent } from './rout/resume/code/code.component';
import { ScriptingComponent } from './rout/resume/professional/scripting/scripting.component';

import { ContactComponent } from './rout/contact/contact.component';
import { SocialComponent } from './rout/contact/social/social.component';
import { CommmissionComponent } from './rout/contact/commmission/commmission.component';
import { ConnectComponent } from './rout/contact/connect/connect.component';

import { QuestionComponent } from './rout/question/question.component';

// Seections
import { FeednavComponent } from './unit/pagenav/feednav/feednav.component';
import { FootnavComponent } from './unit/pagenav/footnav/footnav.component';
import { CorenavComponent } from './unit/pagenav/corenav/corenav.component';
import { TopjumpComponent } from './unit/pagejump/topjump/topjump.component';
import { BottomjumpComponent } from './unit/pagejump/bottomjump/bottomjump.component';
import { MainblurbComponent } from './section/mainblurb/mainblurb.component';

// AngularMaterial
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

// Others
// Import ngx-twitter-timeline (Twitter Feed Widget)
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { BackjumpComponent } from './unit/pagejump/backjump/backjump.component';
import { ForwardjumpComponent } from './unit/pagejump/forwardjump/forwardjump.component';
import { AdspaceComponent } from './section/adspace/adspace.component';
import { AdverticalComponent } from './section/adspace/advertical/advertical.component';
import { AdhorizontalComponent } from './section/adspace/adhorizontal/adhorizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    FeednavComponent,
    FootnavComponent,
    CorenavComponent,
    TopjumpComponent,
    BottomjumpComponent,
    MainblurbComponent,
    HomeComponent,
    NoneComponent,
    AboutComponent,
    SiteComponent,
    MeComponent,
    AnimationComponent,
    SculptingComponent,
    TexturingComponent,
    LogoComponent,
    PosterComponent,
    ResumeComponent,
    CodeComponent,
    ScriptingComponent,
    ContactComponent,
    SocialComponent,
    CommmissionComponent,
    ConnectComponent,
    PersonalComponent,
    BackjumpComponent,
    ForwardjumpComponent,
    AdspaceComponent,
    AdverticalComponent,
    AdhorizontalComponent,
    QuestionComponent,
    ProfessionalComponent,
    ModelingComponent,
  ],
  imports: [
    AdsenseModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatTreeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    // Specify library as an import (Twitter Feed Widget)
    NgxTwitterTimelineModule,
    MatTabsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
