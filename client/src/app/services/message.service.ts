import { Message } from '@models/message/message.model';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  protected controller: string = 'messages';

  constructor(private http: HttpService) {
    this.http.setController(this.controller);
  }

  getMessages(): Observable<Message[]> {
    return this.http.get();
  }
}
