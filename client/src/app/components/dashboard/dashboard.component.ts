import { PageService } from './../../services/page.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  testArray: string[] = [
    null,
    null,
    'Test 1',
    'Test 2',
    'Test 3',
  ]

  constructor(private pageService: PageService) {
    this.pageService.setPageTitle('Dashboard');
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.testArray, event.previousIndex, event.currentIndex);
  }

  addNewSummary = () => {
    this.testArray.push(`Test ${this.testArray.length + 1}`)
  }
}
