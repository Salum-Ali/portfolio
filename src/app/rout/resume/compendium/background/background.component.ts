import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { PotentialPosterComponent } from './potential-poster/potential-poster.component';
import {OceanSunsetComponent} from './ocean-sunset/ocean-sunset.component';
import { NightNebulaComponent } from './night-nebula/night-nebula.component';
import { NorthernCloudsComponent } from './northern-clouds/northern-clouds.component';


@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.sass']
})
export class BackgroundComponent implements OnInit {

  constructor(
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
      /**
   * Check if the router url contains the specified route
   *
   * @param {string} route
   * @returns
   * @memberof BackgroundComponent
   */
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

  FortNine() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(PotentialPosterComponent);
  }
    EnvightOne() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(OceanSunsetComponent);
  }
  EnvightFive() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(NightNebulaComponent);
  }
  EnvightEight() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(NorthernCloudsComponent);
  }


}
