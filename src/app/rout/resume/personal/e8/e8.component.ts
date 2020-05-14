import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
// ^ This has to be in the same component as the Modal Button? ^
import {OceanSunsetComponent} from './ocean-sunset/ocean-sunset.component';
import { ChessSocZeroComponent } from './chess-soc-zero/chess-soc-zero.component';
import { NorthernCloudsComponent } from './northern-clouds/northern-clouds.component';
import { NightNebulaComponent } from './night-nebula/night-nebula.component';
// ^ Probably-Terrible-Idea Individual Modal Refrences ^

@Component({
  selector: 'app-e8',
  templateUrl: './e8.component.html',
  styleUrls: ['./e8.component.sass']
})
export class E8Component implements OnInit {

  constructor(
    public dialog: MatDialog,
    // ^ This Stuff apparantly has to go into the *actual* component you're using as a base ^
  ) { }

  ngOnInit() {
  }
  // The following is probably a terrible idea
  // Individual Angular Material Modal Boxes
  EnvightOne() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(OceanSunsetComponent);
  }
  EnvightTwo() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(ChessSocZeroComponent);
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
