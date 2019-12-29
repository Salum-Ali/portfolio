import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  navLinks = [
    {
      path: 'me',
      label: 'Contact Me'
    },
    // {
    //   path: 'socials',
    //   label: 'Social Medias'
    // },
    {
      path: 'commissions',
      label: 'Commission Me!'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
