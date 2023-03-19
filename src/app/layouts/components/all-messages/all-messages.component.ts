import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Message } from '../../models/message';
import { MessagesService } from '../create-messages/messages.service';

@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.css'],
})
export class AllMessagesComponent {
  title: string = 'All Messages';
  messages!: Message[];
  formAllMessages!: FormGroup;

  constructor(
    private messagesService: MessagesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getMessages();
    this.formAllMessages = this.formBuilder.group({
      fullname: [''],
      created_date: [''],
    });
  }

  get f() {
    return this.formAllMessages.controls;
  }

  getMessages() {
    this.messagesService.getMessages().subscribe({
      next: (data) => {
        this.messages = data as Message[];
        // this.formAllMessages.reset();
      },
      error: (err) => {
        console.log(err);
        alert(err.error.message);
      },
    });
  }

  allMessages() {}
}
