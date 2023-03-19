import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { RegisterService } from '../register/register.service';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-create-messages',
  templateUrl: './create-messages.component.html',
  styleUrls: ['./create-messages.component.css'],
})
export class CreateMessagesComponent {
  userId!: string;
  title: string = 'Create message';
  formCreateMessage!: FormGroup;
  constructor(
    private messagesService: MessagesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {}
  ngOnInit() {
    this.formCreateMessage = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  get f() {
    return this.formCreateMessage.controls;
  }

  createMessage() {
    this.viewUserId();
    if (this.formCreateMessage.invalid) {
      return;
    }

    Object.assign(this.formCreateMessage.value, {
      user_id: parseInt(this.userId),
    });
    this.messagesService.createMessage(this.formCreateMessage.value).subscribe({
      next: (data) => {
        console.log(data);
        alert('Registrado correctamente');
        this.formCreateMessage.reset();
        // this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
        alert(err.error.message);
      },
    });
  }

  public errorHandling = (control: string, error: string) => {
    return this.formCreateMessage.controls[control].hasError(error);
  };

  viewUserId() {
    this.registerService.$userId
      .pipe(take(1))
      .subscribe((message) => (this.userId = message));
  }
}
