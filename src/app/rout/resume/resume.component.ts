import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass']
})
export class ResumeComponent implements OnInit {

  navLinks = [
    {
      path: 'profesional',
      label: 'Profesional Works'
    },
    {
      path: 'personal',
      label: 'Personal Bests'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
