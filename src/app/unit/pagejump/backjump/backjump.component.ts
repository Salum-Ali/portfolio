import { Component, OnInit, Input } from '@angular/core';

import { Location } from '@angular/common';


@Component({
  selector: 'app-backjump',
  templateUrl: './backjump.component.html',
  styleUrls: ['./backjump.component.sass']
})
export class BackjumpComponent implements OnInit {

  constructor(private location: Location) { }

  // @Input() color: string;

  // constructor() { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
