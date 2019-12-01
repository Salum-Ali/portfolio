import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass']
})
export class ResumeComponent implements OnInit {

  navLinks = [
    {
      path: 'sculpting',
      label: '3D Modeling'
    },
    {
      path: 'animation',
      label: 'Animation'
    },
    {
      path: 'art',
      label: '2D Arts'
    },
    {
      path: 'coding',
      label: 'Coding'
    },
    {
      path: 'personal',
      label: 'Personal Work'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
