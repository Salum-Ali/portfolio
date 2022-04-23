import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compendium',
  templateUrl: './compendium.component.html',
  styleUrls: ['./compendium.component.sass']
})
export class CompendiumComponent implements OnInit {


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
      path: 'jams',
      label: 'Game Jam Projects'
    },
    {
      path: 'games',
      label: 'Personal Game Projects'
    },
    {
      path: 'logos',
      label: 'Logo Design',
    },
    // {
    //   path: 'models',
    //   label: '3D Models'
    // },
    {
      path: 'posters',
      label: 'Posters & Advertisements'
    },
    // {
    //   path: 'props',
    //   label: 'Prop Design'
    // },
    // {
    //   path: 'textures',
    //   label: 'Texturing'
    // },
    // {
    //   path: 'vehicles',
    //   label: 'Vehicle Design'
    // }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
