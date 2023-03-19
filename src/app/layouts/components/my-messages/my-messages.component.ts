import { Component } from '@angular/core';
import { take } from 'rxjs';
import { Message } from '../../models/message';
import { MessagesService } from '../create-messages/messages.service';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.css'],
})
export class MyMessagesComponent {
  title: string = 'My Messages';
  userId!: string;
  messages!: Message[];

  constructor(
    private messagesService: MessagesService,
    private registerService: RegisterService
  ) {}

  ngOnInit() {
    this.viewUserId();
    this.getMessagesByUserId();
  }

  getMessagesByUserId() {
    this.messagesService.getMessagesByUserId(parseInt(this.userId)).subscribe({
      next: (data) => {
        this.messages = data as Message[];
      },
      error: (err) => {
        console.log(err);
        alert(err.error.message);
      },
    });
  }

  viewUserId() {
    this.registerService.$userId
      .pipe(take(1))
      .subscribe((message) => (this.userId = message));
  }
}
