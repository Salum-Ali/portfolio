import { BrowserModule } from '@angular/platform-browser';
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

// Materials
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatTreeModule} from '@angular/material/tree';
import { MatIconModule, MatButtonModule } from '@angular/material';

// Seections
import { FeednavComponent } from './unit/pagenav/feednav/feednav.component';
import { FootnavComponent } from './unit/pagenav/footnav/footnav.component';
import { CorenavComponent } from './unit/pagenav/corenav/corenav.component';
import { TopjumpComponent } from './unit/pagejump/topjump/topjump.component';
import { BottomjumpComponent } from './unit/pagejump/bottomjump/bottomjump.component';
import { MainblurbComponent } from './section/mainblurb/mainblurb.component';

// Others
// Import ngx-twitter-timeline (Twitter Feed Widget)
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

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

  ],
  imports: [
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
    NgxTwitterTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
