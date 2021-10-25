import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.scss']
})
export class DashboardSummaryComponent implements OnInit {
  @Input()
  dashboardSummaryTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
