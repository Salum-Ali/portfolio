import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { IslamLogoNeoComponent } from './islam-logo-neo/islam-logo-neo.component';
import { RoverLogoOneComponent } from './rover-logo-one/rover-logo-one.component';
import { RoverLogoTwoComponent } from './rover-logo-two/rover-logo-two.component';
import { ChessSocZeroComponent } from './chess-soc-zero/chess-soc-zero.component';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.sass']
})
export class LogoComponent implements OnInit {

  constructor(
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  FortOne() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(IslamLogoNeoComponent);
  }
  FortFive() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(RoverLogoOneComponent);
  }
  FortThirty() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(RoverLogoTwoComponent);
  }
  EnvightTwo() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(ChessSocZeroComponent);
  }
    /**
   * Check if the router url contains the specified route
   *
   * @param {string} route
   * @returns
   * @memberof LogoComponent
   */
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

}
