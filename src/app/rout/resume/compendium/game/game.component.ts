import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  constructor(
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

      /**
   * Check if the router url contains the specified route
   *
   * @param {string} route
   * @returns
   * @memberof BackgroundComponent
   */
       hasRoute(route: string) {
        return this.router.url.includes(route);
      }

}
