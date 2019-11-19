import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Pages

// Materials
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';


// Seections
import { FeednavComponent } from './feednav/feednav.component';
import { FootnavComponent } from './footnav/footnav.component';
import { CorenavComponent } from './corenav/corenav.component';
import { TopjumpComponent } from './topjump/topjump.component';
import { BottomjumpComponent } from './bottomjump/bottomjump.component';
import { MainblurbComponent } from './mainblurb/mainblurb.component';

@NgModule({
  declarations: [
    AppComponent,
    FeednavComponent,
    FootnavComponent,
    CorenavComponent,
    TopjumpComponent,
    BottomjumpComponent,
    MainblurbComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
