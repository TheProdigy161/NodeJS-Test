import { PageService } from './../../services/page.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  testArray: string[][] = [
    [ null, null, null, null, null, null, null ],
    [ 'Test 1', null, 'Test 3', null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, 'Test 2', 'Test 3', null, null, null, null ],
    [ 'Test 1', 'Test 2', null, null, null, null, null ],
  ]

  constructor(private pageService: PageService) {
    this.pageService.setPageTitle('Dashboard');
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>, arrayIndex: number) {
    if (event.previousContainer === event.container)
      moveItemInArray(this.testArray[arrayIndex], event.previousIndex, event.currentIndex);
    else {
      const fromArray = event.previousContainer.data;
      const toArray = event.container.data;

      const fromElement = fromArray[event.previousIndex];
      const toElement = toArray[event.currentIndex];

      fromArray[event.previousIndex] = toElement;
      toArray[event.previousIndex] = fromElement;

      event.previousContainer.data = fromArray;
      event.container.data = toArray;

      // transferArrayItem(
      //   event.container.data,
      //   event.previousContainer.data,
      //   event.previousIndex,
      //   event.currentIndex
      // );
    }
  }

  addNewSummary = (arrayIndex: number, index: number) => {
    this.testArray[arrayIndex][index] = `Test ${index + 1}`;
  }
}
