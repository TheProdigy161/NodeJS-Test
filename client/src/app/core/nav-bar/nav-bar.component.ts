import { PageService } from './../../services/page.service';
import { VersionData } from '@models/versionData/versionData.model';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('expandSidenav', [
      state('normal', style({
        // opacity: 1
      })),
      state('expand', style({
        // opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
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
    return this.showOnlyIcon ? 'normal' : 'expand'
  }
}
