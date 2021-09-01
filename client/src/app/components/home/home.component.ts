import { Observable } from 'rxjs';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  call$: Observable<any> = new Observable();

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.call$ = this.api.get("http://localhost:5000");
  }
}
