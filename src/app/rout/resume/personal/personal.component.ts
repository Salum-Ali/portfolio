import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.sass']
})
export class PersonalComponent implements OnInit {

  navLinks = [
    {
      path: 'jams',
      label: 'Game Jams & Recurring Projects'
    },
    {
      path: 'hindsight',
      label: 'Project: HindSight'
    },
    {
      path: 'fourty-art-hour-weekends',
      label: 'Fourty-Art-Hour Weekends'
    },
    {
      path: 'environment-eight',
      label: 'Environment Eight'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
