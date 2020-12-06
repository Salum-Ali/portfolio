import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
// import {MatDialog} from '@angular/material';
// import { trigger, state, style, transition, animate, group } from '@angular/animations';
// ^ import fade in animation ^
import { FormGroup, FormBuilder } from '@angular/forms';
// ^ NTS: Fix This At Some Point ^
// import {transition, trigger, query, style, animate, group, animateChild} from '@angular/animations';
// import { fadeAnimation } from './animations';
// import { slider, transformer, fader, stepper } from './animations';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],

    providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],

    animations: [
        // fadeAnimation,
        // style
        // fader
    ]
    // register the animations

})
export class AppComponent implements OnInit {
    title = 'Salum Ali Muhammed - Creative Semi-Intermediate';
    //   public href: string = '';

    // contactForm: FormGroup;
    // ^ Probably not important? Either that or supposed to be a constructor class ^
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        public location: Location,
        // public dialog: MatDialog,
        private formBuilder: FormBuilder,
        // ^ Not Necicary - I just don't like linting errors ^
        private http: HttpClient
        ) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => {
                let child = this.activatedRoute.firstChild;
                while (child) {
                    if (child.firstChild) {
                        child = child.firstChild;
                    } else if (child.snapshot.data &&    child.snapshot.data.title) {
                        return child.snapshot.data.title;
                    } else {
                        return null;
                    }
                }
                return null;
            })
        ).subscribe( (data: any) => {
            if (data) {
                this.titleService.setTitle(data + ' - SalumAli.ME');
            }
        });
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
      }

    ngOnInit() {
        // this.href = this.router.url;
        // console.log(this.router.url);
        console.log(this.location.path());
    }
    // openDialog() {
    //     alert(222);
    //     // this.dialog.open();
    // }
}

// ^ CREDIT: mainly @Ankur's answer on SrackOverFlow
// => https://stackoverflow.com/questions/47900447/how-to-change-page-title-with-routing-in-angular-application ^
