import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-grid-chart',
  templateUrl: './pie-grid-chart.component.html',
  styleUrls: ['./pie-grid-chart.component.scss']
})
export class PieGridChartComponent implements OnInit {
  results: any[] = [
    {
      "name": "Test",
      "value": 123456
    },
    {
      "name": "Test2",
      "value": 2329
    },
    {
      "name": "Test3",
      "value": 32239
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
