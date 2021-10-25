import { Component, OnInit } from '@angular/core';
import { Message } from '@models/message/message.model';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  call$: Observable<Message[]> = new Observable();

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    this.call$ = this.messageService.getMessages();
  }
}
