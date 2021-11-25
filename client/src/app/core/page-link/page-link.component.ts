import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-link',
  templateUrl: './page-link.component.html',
  styleUrls: ['./page-link.component.scss'],
  animations: [
    trigger('expandSidenav', [
      state('mini', style({
        width: '0px'
      })),
      state('expand', style({
        width: '120px'
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
