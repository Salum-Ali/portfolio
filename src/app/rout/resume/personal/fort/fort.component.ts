import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// ^ This has to be in the same component as the Modal Button? ^
import { IslamLogoNeoComponent } from './islam-logo-neo/islam-logo-neo.component';
import { RoverLogoOneComponent } from './rover-logo-one/rover-logo-one.component';

import { PotentialPosterComponent } from './potential-poster/potential-poster.component';
import { RoverIntroTwonineteenComponent } from './rover-intro-twonineteen/rover-intro-twonineteen.component';
import { RoverLogoTwoComponent } from './rover-logo-two/rover-logo-two.component';
import { RoverIntroTwoeighteenComponent } from './rover-intro-twoeighteen/rover-intro-twoeighteen.component';
import { RoverAnualTwonineteenComponent } from './rover-anual-twonineteen/rover-anual-twonineteen.component';
import { IllustratorAssessmentComponent } from './illustrator-assessment/illustrator-assessment.component';
// ^ Probably-Terrible-Idea Individual Modal Refrences ^/

@Component({
  selector: 'app-fort',
  templateUrl: './fort.component.html',
  styleUrls: ['./fort.component.sass']
})
export class FortComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    // ^ This Stuff apparantly has to go into the *actual* component you're using as a base ^
  ) { }

  ngOnInit() {
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
  FortSix() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(RoverIntroTwoeighteenComponent);
  }
  FortNine() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(PotentialPosterComponent);
  }
  FortTwentynine() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(RoverIntroTwonineteenComponent);
  }
  FortThirty() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(RoverLogoTwoComponent);
  }
  FortThirtyone() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(RoverAnualTwonineteenComponent);
  }
  FortThirtyseven() {
    // alert(123);
    // ^ Testing reasons ^,
    this.dialog.open(IllustratorAssessmentComponent);
  }
  // ^ Individual Dialog Boxes for Fourty-Art-Hour-Weekends ^

}
