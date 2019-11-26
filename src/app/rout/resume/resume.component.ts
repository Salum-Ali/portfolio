import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass']
})
export class ResumeComponent implements OnInit {

  navLinks = [
    {
      path: 'modeling',
      label: '3D Modeling'
    },
    {
      path: 'animation',
      label: 'Animation'
    },
    {
      path: 'art',
      label: 'Texturing'
    },
    {
      path: 'coding',
      label: 'Scripting'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
