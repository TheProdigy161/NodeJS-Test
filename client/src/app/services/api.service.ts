import { Message } from '@models/message/message.model';
import { VersionData } from '@models/versionData/versionData.model';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected controller: string = 'api';

  constructor(private http: HttpService) {
    this.http.setController(this.controller);
  }

  getApi(): Observable<Message[]> {
    return this.http.get();
  }

  getVersion(): Observable<VersionData> {
    return this.http.get('version');
  }
}
