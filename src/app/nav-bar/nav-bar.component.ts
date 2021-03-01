import { Component, OnInit } from '@angular/core';
import { navbarOptions } from '../nav-options';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  navbarOptions = navbarOptions;

  constructor() { }

  ngOnInit(): void {
  }

}
