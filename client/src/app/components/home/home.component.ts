import { Message } from '@models/message/message.model';
import { Observable } from 'rxjs';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  call$: Observable<Message[]> = new Observable();

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    this.call$ = this.messageService.getMessages();
  }
}
