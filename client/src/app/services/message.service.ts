import { Message } from '@models/message/message.model';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  protected controller: string = 'messages';

  constructor(private api: ApiService) {
    this.api.setController(this.controller);
  }

  getMessages(): Observable<Message[]> {
    return this.api.get();
  }
}
