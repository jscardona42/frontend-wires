import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { RegisterService } from 'src/app/layouts/components/register/register.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  username!: string;
  userId!: string;

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.viewUsername();
    this.viewUserId();
  }

  sendUsername(message: string) {
    this.registerService.sendUsername(message);
  }

  sendUserId(message: string) {
    this.registerService.sendUserId(message);
  }

  viewUsername() {
    this.registerService.$username
      .pipe(take(1))
      .subscribe((message) => (this.username = message));
  }

  viewUserId() {
    this.registerService.$userId
      .pipe(take(1))
      .subscribe((message) => (this.userId = message));
  }

  logOutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('fullname');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
