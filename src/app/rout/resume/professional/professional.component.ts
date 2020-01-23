import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.sass']
})
export class ProfessionalComponent implements OnInit {

  navLinks = [
    {
      path: 'modeling',
      label: '3D Modeling'
    },
    // {
    //   path: 'animation',
    //   label: 'Animations'
    // },
    {
      path: 'art',
      label: '2D Arts'
    },
    {
      path: 'coding',
      label: 'Programming'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
