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
    //   path: 'questions',
    //   label: 'FAQ'
    // },
    // {
    //   path: 'comments',
    //   label: 'Feedback'
    // },
  ];

  constructor() { }

  ngOnInit() {
  }

}
