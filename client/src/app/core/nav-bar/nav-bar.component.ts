import { VersionData } from '@models/versionData/versionData.model';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  version$: Observable<VersionData> = new Observable();

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.version$ = this.api.getVersion();
  }
}
