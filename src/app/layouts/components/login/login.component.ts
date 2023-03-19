import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { RegisterService } from '../register/register.service';
import * as CryptoJS from "crypto-js";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formSignIn!: FormGroup;
  constructor(
    private registerService: RegisterService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formSignIn = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.formSignIn.controls;
  }

  signInUser() {
    if (this.formSignIn.invalid) {
      return;
    }
    this.registerService.signInUser(this.formSignIn.value).subscribe({
      next: (data) => {
        console.log(data);
        this.startSession(data);
        alert('Inicio de sesión ok');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
        alert(err.error.message);
      },
    });
  }

  startSession(data: any) {
    localStorage.removeItem('token');
    localStorage.setItem(
      'token',
      CryptoJS.AES.encrypt(data.token, environment.key_crypto).toString()
    );
  }

  public errorHandling = (control: string, error: string) => {
    return this.formSignIn.controls[control].hasError(error);
  };
}
