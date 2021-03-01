import { Component, OnInit } from '@angular/core';
import { quicklinks } from './quicklink';

@Component({
  selector: 'app-quicklinks',
  templateUrl: './quicklinks.component.html',
  styleUrls: ['./quicklinks.component.scss']
})
export class QuicklinksComponent implements OnInit {
  quicklinks = quicklinks;

  constructor() { }

  ngOnInit(): void {
  }
}
