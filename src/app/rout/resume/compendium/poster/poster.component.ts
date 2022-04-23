import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { RoverIntroTwonineteenComponent } from './rover-intro-twonineteen/rover-intro-twonineteen.component';
import { RoverIntroTwoeighteenComponent } from './rover-intro-twoeighteen/rover-intro-twoeighteen.component';
import { RoverAnualTwonineteenComponent } from './rover-anual-twonineteen/rover-anual-twonineteen.component';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.sass']
})
export class PosterComponent implements OnInit {

  constructor(
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  FortSix() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(RoverIntroTwoeighteenComponent);
  }
  FortTwentynine() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(RoverIntroTwonineteenComponent);
  }
  FortThirtyone() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(RoverAnualTwonineteenComponent);
  }
    /**
   * Check if the router url contains the specified route
   *
   * @param {string} route
   * @returns
   * @memberof PosterComponent
   */
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

}
