import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {OceanSunsetComponent} from './ocean-sunset/ocean-sunset.component';


@Component({
  selector: 'app-e8',
  templateUrl: './e8.component.html',
  styleUrls: ['./e8.component.sass']
})
export class E8Component implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }
  EnvEightOne() {
    // alert(123);
    // ^ Testing reasons ^
    this.dialog.open(OceanSunsetComponent);
}

}
