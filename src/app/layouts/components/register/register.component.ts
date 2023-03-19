import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formCreate!: FormGroup;
  constructor(
    private registerService: RegisterService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formCreate = this.formBuilder.group({
      fullname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required,  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.formCreate.controls;
  }

  createUser() {
    if (this.formCreate.invalid) {
      return;
    }
    this.registerService.createUser(this.formCreate.value).subscribe({
      next: (data) => {
        console.log(data);
        alert('Registrado correctamente');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
        alert(err.error.message);
      },
    });
  }

  public errorHandling = (control: string, error: string) => {
    return this.formCreate.controls[control].hasError(error);
  };
}
