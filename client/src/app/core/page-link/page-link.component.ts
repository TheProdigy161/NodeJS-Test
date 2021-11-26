import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

const PAGE_LINK_WIDTH: number = 50;
const PAGE_LINK_EXPANDED_WIDTH: number = 170;

@Component({
  selector: 'app-page-link',
  templateUrl: './page-link.component.html',
  styleUrls: ['./page-link.component.scss'],
  animations: [
    trigger('expandSidenav', [
      state('mini', style({
        width: `${PAGE_LINK_WIDTH}px`
      })),
      state('expand', style({
        width: `${PAGE_LINK_EXPANDED_WIDTH}px`
      })),
      transition('mini <=> expand', animate('100ms ease-in'))
    ])
  ]
})
export class PageLinkComponent implements OnInit {
  @Input()
  pageRoute: string = null;
  @Input()
  pageName: string = null;
  @Input()
  icon: string = null;
  @Input()
  iconOnly: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getStateName(): string {
    return this.iconOnly ? 'mini' : 'expand'
  }
}
