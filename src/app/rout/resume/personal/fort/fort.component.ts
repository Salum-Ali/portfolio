import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
// ^ This has to be in the same component as the Modal Button? ^
// ^ Probably-Terrible-Idea Individual Modal Refrences ^

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
    // this.dialog.open();
  }
  FortFive() {
    // alert(123);
    // ^ Testing reasons ^
    // this.dialog.open();
  }
  FortSix() {
    // alert(123);
    // ^ Testing reasons ^
    // this.dialog.open();
  }
  FortNine() {
    // alert(123);
    // ^ Testing reasons ^
    // this.dialog.open();
  }
  FortTwentynine() {
    // alert(123);
    // ^ Testing reasons ^
    // this.dialog.open();
  }
  FortThirty() {
    // alert(123);
    // ^ Testing reasons ^
    // this.dialog.open();
  }
  FortThrityone() {
    // alert(123);
    // ^ Testing reasons ^
    // this.dialog.open();
  }
  FortThirtyseven() {
    // alert(123);
    // ^ Testing reasons ^
    // this.dialog.open();
  }
  // ^ Individual Dialog Boxes for Fourty-Art-Hour-Weekends ^

}
