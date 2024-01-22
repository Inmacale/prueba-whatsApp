import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/model/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() message: Message;

  constructor() {
    this.message = { id: 0, content: '', type: 'output', date: new Date() };

  }



}
