import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-link',
  templateUrl: './page-link.component.html',
  styleUrls: ['./page-link.component.scss']
})
export class PageLinkComponent implements OnInit {
  @Input()
  pageRoute: string = null;
  @Input()
  pageName: string = null;

  constructor() { }

  ngOnInit(): void {
  }
}
