import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  pageTitle$: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() {
    this.setPageTitle('Application');
  }

  setPageTitle(title: string) {
    this.pageTitle$.next(title);
  }
}
