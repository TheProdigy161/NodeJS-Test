import { PageService } from './../../services/page.service';
import { VersionData } from '@models/versionData/versionData.model';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

const SIDENAV_WIDTH: number = 50;
const SIDENAV_EXPANDED_WIDTH: number = 180;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('expandSidenav', [
      state('mini', style({
        width: `${SIDENAV_WIDTH}px`
      })),
      state('expand', style({
        width: `${SIDENAV_EXPANDED_WIDTH}px`
      })),
      transition('mini <=> expand', animate('100ms ease-in'))
    ]),
    trigger('shiftSidenavContent', [
      state('mini', style({
        "margin-left": `${SIDENAV_WIDTH}px`
      })),
      state('expand', style({
        "margin-left": `${SIDENAV_EXPANDED_WIDTH}px`
      })),
      transition('mini <=> expand', animate('100ms ease-in'))
    ])
  ]
})
export class NavBarComponent implements OnInit {
  version$: Observable<VersionData> = new Observable();
  showOnlyIcon: boolean = true;

  constructor(private api: ApiService, public pageService: PageService) {
  }

  ngOnInit(): void {
    this.version$ = this.api.getVersion();
  }

  toggleSidenav(): void {
    this.showOnlyIcon = !this.showOnlyIcon;
  }

  getStateName(): string {
    return this.showOnlyIcon ? 'mini' : 'expand'
  }
}
