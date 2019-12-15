import { Component, OnInit, Input } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-forwardjump',
  templateUrl: './forwardjump.component.html',
  styleUrls: ['./forwardjump.component.sass']
})
export class ForwardjumpComponent implements OnInit {

  constructor(private location: Location) { }

  @Input() color: string;

  ngOnInit() {
  }

  goForward() {
    this.location.forward();
  }

}
