import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
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
