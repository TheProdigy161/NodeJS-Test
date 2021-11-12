import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.scss']
})
export class DashboardSummaryComponent implements OnInit {
  @Input()
  addFunction: any = null;
  @Input()
  allowEdit: boolean = false;
  @Input()
  dashboardSummaryTitle: string = null;
  @Input()
  arrayIndex: number = null;
  @Input()
  index: number = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  add(): void {
    this.addFunction(this.arrayIndex, this.index);
  }

  showBlankCard(): boolean {
    return this.dashboardSummaryTitle == null;
  }

  showAdd(): boolean {
    return this.addFunction != null;
  }
}
