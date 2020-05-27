import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motto',
  templateUrl: './motto.component.html',
  styleUrls: ['./motto.component.sass']
})
export class MottoComponent implements OnInit {

  MottoLong = '~ Remember the Past, Live the Present, Dream the Future ~';
  MottoMedium = '~|~ Remember, Live, Dream ~|~';
  // ^ NTS: How to make new line probably ^

  constructor() { }

  ngOnInit() {
  }

}
