import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.sass']
})
export class CompleteComponent implements OnInit {

  navLinks = [
    // {
    //   path: 'animations',
    //   label: 'Animation"
    // },
    // ^ Currently W-I-P ^
    // {
    //   path: 'architecture',
    //   label: 'Architecture'
    // },
    {
      path: 'backgrounds',
      label: 'Background & Environment Art'
    },
    {
      path: 'games',
      label: 'Game Jams & Projects'
    },
    {
      path: 'branding',
      label: 'Logos & Branding Material'
    },
    // {
    //   path: 'models',
    //   label: '3D Models'
    // },
    {
      path: 'posters',
      label: 'Posters'
    },
    {
      path: 'props',
      label: 'Prop Design'
    },
    {
      path: 'textures',
      label: 'Texturing'
    },
    // {
    //   path: 'vehicles',
    //   label: 'Vehicle Design'
    // }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
