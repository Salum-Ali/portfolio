// Angular-Stuff
import { AdsenseModule } from 'ng2-adsense';
// ^ Google Adsense? ^

import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Pages
import { HomeComponent } from './rout/home/home.component';

import { NoneComponent } from './rout/none/none.component';

// About Pages
import { AboutComponent } from './rout/about/about.component';
import { SiteComponent } from './rout/about/site/site.component';
import { MeComponent } from './rout/about/me/me.component';

// CV Pages
import { ProfessionalComponent } from './rout/resume/professional/professional.component';
import { ModelingComponent } from './rout/resume/professional/modeling/modeling.component';
import { PersonalComponent } from './rout/resume/personal/personal.component';
import { AnimationComponent } from './rout/resume/professional/animation/animation.component';
import { TexturingComponent } from './rout/resume/professional/texturing/texturing.component';
import { ResumeComponent } from './rout/resume/resume.component';
import { ScriptingComponent } from './rout/resume/professional/scripting/scripting.component';
import { PedagogyComponent } from './rout/resume/pedagogy/pedagogy.component';

import { ContactComponent } from './rout/contact/contact.component';
import { CommmissionComponent } from './rout/shop/commmission/commmission.component';
import { ConnectComponent } from './rout/contact/connect/connect.component';

import { QuestionComponent } from './rout/contact/question/question.component';

import { CommentComponent } from './rout/contact/comment/comment.component';

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
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';

// Others
// Import ngx-twitter-timeline (Twitter Feed Widget)
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { BackjumpComponent } from './unit/pagejump/backjump/backjump.component';
import { ForwardjumpComponent } from './unit/pagejump/forwardjump/forwardjump.component';
import { AdspaceComponent } from './section/adspace/adspace.component';
import { AdverticalComponent } from './section/adspace/advertical/advertical.component';
import { AdhorizontalComponent } from './section/adspace/adhorizontal/adhorizontal.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { StudyComponent } from './rout/resume/personal/study/study.component';
import { JamComponent } from './rout/resume/personal/jam/jam.component';
import { HindsightComponent } from './rout/resume/personal/hindsight/hindsight.component';
import { E8Component } from './rout/resume/personal/e8/e8.component';
import { FortComponent } from './rout/resume/personal/fort/fort.component';
import { SkillzComponent } from './rout/about/skillz/skillz.component';
import { CreditComponent } from './unit/pagenav/footnav/credit/credit.component';
import { MottoComponent } from './unit/pagenav/footnav/motto/motto.component';
import { ShopComponent } from './rout/shop/shop.component';
import { StoreComponent } from './rout/shop/store/store.component';
import { PosterComponent } from './rout/resume/professional/texturing/poster/poster.component';
import { LogComponent } from './rout/log/log.component';

import { ChessSocZeroComponent } from './rout/resume/personal/e8/chess-soc-zero/chess-soc-zero.component';
import { OceanSunsetComponent } from './rout/resume/personal/e8/ocean-sunset/ocean-sunset.component';
import { NightNebulaComponent } from './rout/resume/personal/e8/night-nebula/night-nebula.component';
import { NorthernCloudsComponent } from './rout/resume/personal/e8/northern-clouds/northern-clouds.component';
import { IslamLogoNeoComponent } from './rout/resume/personal/fort/islam-logo-neo/islam-logo-neo.component';
import { IllustratorAssessmentComponent } from './rout/resume/personal/fort/illustrator-assessment/illustrator-assessment.component';
import { RoverLogoOneComponent } from './rout/resume/personal/fort/rover-logo-one/rover-logo-one.component';
import { RoverLogoTwoComponent } from './rout/resume/personal/fort/rover-logo-two/rover-logo-two.component';
import { PotentialPosterComponent } from './rout/resume/personal/fort/potential-poster/potential-poster.component';
import { RoverIntroTwonineteenComponent } from './rout/resume/personal/fort/rover-intro-twonineteen/rover-intro-twonineteen.component';
import { RoverIntroTwoeighteenComponent } from './rout/resume/personal/fort/rover-intro-twoeighteen/rover-intro-twoeighteen.component';
import { RoverAnualTwonineteenComponent } from './rout/resume/personal/fort/rover-anual-twonineteen/rover-anual-twonineteen.component';
import { SociolinkComponent } from './unit/weblink/sociolink/sociolink.component';

import { ContactService } from './contact.service';


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
    TexturingComponent,
    ResumeComponent,
    ScriptingComponent,
    ContactComponent,
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
    CommentComponent,
    StudyComponent,
    JamComponent,
    HindsightComponent,
    E8Component,
    FortComponent,
    SkillzComponent,
    CreditComponent,
    MottoComponent,
    ShopComponent,
    StoreComponent,
    PosterComponent,
    LogComponent,
    PedagogyComponent,
    ChessSocZeroComponent,
    OceanSunsetComponent,
    NightNebulaComponent,
    NorthernCloudsComponent,
    IslamLogoNeoComponent,
    IllustratorAssessmentComponent,
    RoverLogoOneComponent,
    RoverLogoTwoComponent,
    PotentialPosterComponent,
    RoverIntroTwonineteenComponent,
    RoverIntroTwoeighteenComponent,
    RoverAnualTwonineteenComponent,
    SociolinkComponent,
  ],
  entryComponents: [
    OceanSunsetComponent,
    ChessSocZeroComponent,
    NightNebulaComponent,
    NorthernCloudsComponent,
    // ^ Environment Eight ^
    IslamLogoNeoComponent,
    RoverLogoOneComponent,
    PotentialPosterComponent,
    RoverIntroTwoeighteenComponent,
    RoverLogoTwoComponent,
    RoverIntroTwonineteenComponent,
    RoverAnualTwonineteenComponent,
    IllustratorAssessmentComponent
    // ^ Fourty-Art-Hour-Weekends ^
  ],
  // ^ Mainly for Dialog/Modal Boxes ^
  imports: [
    AdsenseModule.forRoot(),
    // ^ This Probably will work ^
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    // Specify library as an import (Twitter Feed Widget)
    NgxTwitterTimelineModule,
    MatTabsModule,
    MatGridListModule,
    MatTooltipModule,
    // FlexLayoutModule
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    Title,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
