import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class AppComponent implements OnInit {
  title = 'Salum Ali Muhammed - Creative Semi-Intermediate';
  MottoLong = '~|~ Remember the Past, Live the Present, Dream the Future ~|~';
  MottoShort = '~|~ Remember, Live, Dream ~|~';
//   public href: string = '';

    contactForm: FormGroup;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title, public location: Location, private formBuilder: FormBuilder) {
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

    ngOnInit() {
        // this.href = this.router.url;
        // console.log(this.router.url);
        console.log(this.location.path());
    }

}

// ^ CREDIT: mainly @Ankur's answer on SrackOverFlow
// => https://stackoverflow.com/questions/47900447/how-to-change-page-title-with-routing-in-angular-application ^
