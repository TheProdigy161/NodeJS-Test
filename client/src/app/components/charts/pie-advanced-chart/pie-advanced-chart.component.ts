import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-advanced-chart',
  templateUrl: './pie-advanced-chart.component.html',
  styleUrls: ['./pie-advanced-chart.component.scss']
})
export class PieAdvancedChartComponent implements OnInit {
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
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
