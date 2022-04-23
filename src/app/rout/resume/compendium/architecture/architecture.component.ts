import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.sass']
})
export class ArchitectureComponent implements OnInit {

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
