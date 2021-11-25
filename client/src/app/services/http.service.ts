import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsProvider } from './settingsProvider';
import { ApiResponse } from '@models/apiResponse/apiResponse.model'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  protected apiUrl: string = SettingsProvider.appConfig.apiUrl;
  protected controller: string = null;

  constructor(private http: HttpClient) { }

  public setController(controller: string): void {
    this.controller = controller;
  }

  public get<T>(action?: string): Observable<T> {
    return this.http.get<ApiResponse<T>>(`${this.apiUrl}/${this.controller}/${action ?? ''}`)
      .pipe(map(x => x.body)
    );
  }
}
